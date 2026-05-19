---
title: "Arquitectura Híbrida: Gestionando +150k Libros con FastAPI y Telegram"
date: 2026-05-19
description: "Diseño e implementación de un microservicio asíncrono para indexar, buscar y distribuir más de 150.000 volúmenes digitales superando cuellos de botella I/O."
draft: false
category: Proyectos
---

## El Reto: Escalar más allá del Prototipo

Crear un bot de Telegram que envíe un par de archivos es un ejercicio sencillo. Sin embargo, cuando el catálogo físico real supera los **88.234 volúmenes** (eBooks en EPUB, PDF y MOBI), la arquitectura monolítica tradicional colapsa.

El objetivo de este proyecto fue diseñar un microservicio híbrido asíncrono optimizado que garantizara una latencia de búsqueda inferior a 5 milisegundos, un consumo de CPU casi nulo en reposo y una transferencia de archivos sin bloqueos. Para lograrlo, tuve que resolver cuellos de botella críticos a nivel de red, concurrencia y operaciones de entrada/salida (*I/O Bound*) en discos físicos.

![Imagen de Telegram](./img/telegram.png)

## Stack Tecnológico

El núcleo del sistema se construyó seleccionando herramientas de alto rendimiento:

* **Servidor ASGI:** FastAPI + Uvicorn. Elegido por su concurrencia nativa y validación con Pydantic.
* **Cliente Bot:** pyTelegramBotAPI (TeleBot), controlado dentro del ciclo de vida de FastAPI.
* **Motor de Datos:** SQLite3 con el módulo de índice invertido **FTS5**.
* **Contenedores:** Docker & Docker Compose para un aislamiento absoluto y portabilidad.
* **Túnel de Red:** Ngrok para exponer el puerto mediante un túnel seguro TLS/SSL (requerido por los webhooks de Telegram).

## Arquitectura Asíncrona y Patrones de Diseño

Para mantener el sistema fluido bajo estrés, implementé varios patrones arquitectónicos clave:

### 1. Inversión de Control con Lifespan

Utilizando el decorador `@asynccontextmanager` de FastAPI, el microservicio controla la inicialización y parada limpia del sistema. Durante el arranque, se inyectan las conexiones a la base de datos, se sincroniza el sistema de archivos y se configura el webhook. En el apagado, se invoca un *shutdown* que espera a que los hilos de trabajo terminen, garantizando que ninguna descarga en curso se corrompa si el contenedor se detiene.

### 2. Adiós al Polling: Arquitectura Webhook

El prototipo inicial utilizaba `infinity_polling()`, lo que saturaba la CPU con peticiones HTTP GET recurrentes y causaba errores de conflicto (Error 409) al escalar. La solución fue invertir el flujo: Telegram actúa ahora como un cliente web que dispara peticiones HTTP POST asíncronas hacia nuestro *endpoint* `/webhook` solo cuando ocurre un evento, reduciendo el consumo del procesador a ~0% en reposo.

### 3. Productor-Consumidor (I/O Offloading)

Leer un PDF de 50MB desde el disco es una operación bloqueante. Si el hilo principal de FastAPI lo procesara, el servidor entero se congelaría. Para solucionarlo, delegué estas descargas a un `ThreadPoolExecutor` (Pool de Hilos). La API web actúa como **productor** de tareas y devuelve un HTTP 200 inmediatamente, mientras que los *Workers* operan en *background* como **consumidores**, enviando el archivo sin interrumpir el bucle de eventos principal.

```text
                       [ USUARIO ]
              (Telegram Chat / WebApp SPA)
                           │
                           │ 1. Solicita Libro
                           ▼
                 ┌───────────────────┐
                 │  FastAPI (Uvicorn)│◄── (Webhook asíncrono)
                 └─────────┬─────────┘
                           │
         ┌─────────────────┴─────────────────┐
         │                                   │
    2. Búsqueda                         3. Descarga
         ▼                                   ▼
  ┌─────────────┐                 ┌────────────────────┐
  │   SQLite3   │                 │ ThreadPoolExecutor │
  │ (FTS5 BM25) │                 │  (I/O Offloading)  │
  └─────────────┘                 └─────────┬──────────┘
                                            │
                                 ¿Existe `file_id` local?
                                 ┌──────────┴──────────┐
                                 │                     │
                              [ SÍ ]                 [ NO ]
                                 │                     │
                                 ▼                     ▼
                        ┌────────────────┐    ┌─────────────────┐
                        │ Reenvío Rápido │    │ 1. Leer HDD     │
                        │ (Caché en Nube)│    │ 2. Subir a API  │
                        │ Coste: O(1)    │    │ 3. Guardar ID   │
                        └────────┬───────┘    └────────┬────────┘
                                 │                     │
                                 └──────────┬──────────┘
                                            │ 4. Entrega
                                            ▼
                                 [ ARCHIVO ENTREGADO ]
```

## Base de Datos e Indexación Avanzada (FTS5)

Con más de 88.000 registros, el uso del clásico `LIKE %query%` en SQL generaba una complejidad temporal $O(n)$ que degradaba el rendimiento.

Implementé un esquema híbrido:
1.**Tabla Relacional (`libros`)**: Almacena las rutas físicas, UUIDs y metadatos extraídos dinámicamente de los esquemas XML (Dublin Core) de Calibre.
2.**Tabla Virtual (`libros_fts`)**: Emplea el motor FTS5 (*Full-Text Search*) de SQLite. En lugar de escanear filas, FTS5 tokeniza el contenido (título, autor, sinopsis) en un **índice invertido**, asociando palabras a punteros (`rowid`).

Para mantener ambos mundos sincronizados sin intervención en el código Python, diseñé **Triggers SQL** (`INSERT`, `DELETE`, `UPDATE`) que propagan cualquier cambio en el disco físico directamente al índice de búsqueda. Finalmente, las búsquedas complejas utilizan el algoritmo de ranking **BM25** para ordenar los resultados por relevancia instantáneamente.

## Resolviendo Cuellos de Botella de Hardware

El mayor reto del proyecto no fue el software, sino el hardware. Durante la migración masiva de datos, el escaneo del disco colapsó el sistema.

Monitoreando las métricas del sistema operativo, detecté que el disco duro magnético (un Seagate SATA) reportaba un Tiempo Activo del 100% con tasas de transferencia minúsculas (~524 KB/s). El diagnóstico fue claro: **Latencia física por el salto de la aguja (*Seek Time*)** al intentar leer más de 88.000 diminutos archivos `metadata.opf` esparcidos aleatoriamente por los sectores físicos del disco.

**La mitigación:** Encapsulé la sincronización profunda con un condicional de control (`SELECT COUNT(*)`) en el evento de inicio. Así, la penalización de lectura masiva de I/O se sufre exclusivamente durante el primer despliegue del contenedor; en reinicios posteriores, el sistema arranca en menos de 0.5 segundos leyendo directamente la caché indexada.

![Imagen de Kindle](./img/kindle.png)

## Optimización $O(1)$ en Ancho de Banda

Subir un EPUB de 15MB desde el servidor local a Telegram repetidas veces es un desperdicio masivo de ancho de banda.

Para solucionarlo, el controlador intercepta la primera respuesta exitosa de Telegram, extrae su identificador único criptográfico en la nube (`file_id`) y lo persiste en la base de datos local.

Cuando otro usuario solicita el mismo libro, el sistema detecta el `file_id` y le instruye a Telegram que reenvíe el archivo desde sus propios servidores. El tiempo de envío pasa de varios segundos a ser prácticamente instantáneo, convirtiendo el coste de red de $O(n)$ megabytes a una operación $O(1)$, reduciendo el consumo de ancho de banda de subida local a cero.

## Conclusión

Construir esta biblioteca asíncrona demostró que la escalabilidad no siempre requiere añadir clústeres de Redis o migrar a microservicios complejos en AWS. Aplicando fundamentos sólidos de ingeniería de software —como la inversión de dependencias I/O, el uso de índices invertidos para búsquedas de texto completo y la gestión inteligente de cachés en red— es posible lograr rendimientos de grado empresarial utilizando infraestructuras locales ligeras.
