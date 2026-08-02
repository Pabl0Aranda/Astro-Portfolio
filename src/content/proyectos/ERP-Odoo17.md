---
title: "ERP Basado en Odoo 17"
description: "Implementación de una solución ERP basada en Odoo 18 para la gestión integral de discotecas, festivales y locales de ocio."
tech: "Odoo • Python • OWL (JS) • PostgreSQL • XML"
link: "https://github.com/davgarbla11/trabajo_tsi"
orden: 2
---

## El Problema

La gestión operativa de discotecas, festivales y grandes locales de ocio nocturno suele estar profundamente fragmentada. Tradicionalmente, la administración de recursos humanos (camareros, seguridad, DJs), el control de stock en las barras, la venta de entradas y la gestión de incidencias se realizan mediante sistemas aislados o, en muchos casos, herramientas manuales.

Esta desconexión tecnológica provoca tiempos de respuesta lentos, fugas o desajustes en el inventario de bebidas, cuellos de botella en la atención al cliente y una grave falta de visibilidad analítica para la toma de decisiones en tiempo real durante los eventos.

## La Solución Tecnológica

Para resolver este desafío de fragmentación, desarrollamos una **plataforma de gestión integral basada en Odoo (v17)**. La elección de Odoo como framework base nos permitió aprovechar su robusto ecosistema empresarial (PostgreSQL + Python), extendiéndolo a través de un módulo personalizado construido específicamente para las necesidades del sector del ocio.

Este módulo centraliza todas las áreas del negocio y está respaldado por una interfaz web pública para la promoción de eventos y venta de tickets.

### Arquitectura de Módulos (Backend)

La lógica de negocio se estructuró en modelos de Python interconectados que mapean la realidad operativa del local:

1. **Gestión de RRHH y Personal:** Control de perfiles (Camareros, Seguridad, RRPP) y automatización de nóminas considerando horas extra y bonificaciones.
2. **Logística y Espacios:** Mapeo del recinto dividiendo áreas (Pista Principal, Zonas VIP) y gestión de ocupación de reservados en tiempo real.
3. **Operativa de Ventas e Inventario:** Un sistema integral que rastrea desde los pedidos a proveedores (suministros) hasta las comandas tomadas por los camareros, gestionando transacciones y estados de pedido (Confirmado, Servido, Pagado).
4. **Seguridad y Atención al Cliente:** Módulos dedicados para el registro rápido de incidencias (altercados) y la gestión estructurada de objetos perdidos.

### Paneles de Control en Tiempo Real (OWL)

Para garantizar la agilidad necesaria durante el transcurso de un evento, donde la velocidad es crítica, no bastaba con las vistas estándar (XML) del backend de Odoo.

Implementamos componentes reactivos utilizando **Odoo Web Library (OWL)** —el framework frontend basado en JavaScript de Odoo— para crear dashboards interactivos:

- **Order Manager:** Un panel ultra rápido diseñado para que el personal de barra gestione el flujo de pedidos sin fricción.
- **Event Dashboard:** Visualización gráfica y en tiempo real de métricas críticas como asistencia viva y recaudación.
- **Incident Monitor:** Un sistema de alertas activas para coordinar rápidamente a los equipos de seguridad.

## Conclusión

El uso de un ERP modular como Odoo nos permitió transformar un conjunto de procesos caóticos y manuales en un flujo de trabajo 100% digital, centralizado y escalable. La integración profunda entre un backend robusto basado en Python y PostgreSQL para garantizar la integridad de los datos financieros y de stock, y los componentes frontend modernos desarrollados en OWL, demostró ser la arquitectura ideal.

Esta sinergia tecnológica no solo resolvió los cuellos de botella operativos, sino que proporcionó una experiencia de usuario reactiva e instantánea, cumpliendo con los demandantes requisitos de velocidad que exige el sector del ocio nocturno y los grandes eventos.
