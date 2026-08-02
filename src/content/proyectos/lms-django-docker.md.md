---
title: "Sistema de Gestión de Aprendizaje"
description: "Plataforma educativa con sistema de gestión de cursos, usuarios y autenticación, desarrollada siguiendo una arquitectura RESTful."
tech: "Django • HTML • CSS • JavaScript • Docker • API REST"
link: "https://github.com/Pabl0Aranda/UPO-Learn"
orden: 3
---

## El Problema

La gestión de recursos educativos y el seguimiento académico en entornos modernos exige plataformas altamente disponibles y fáciles de mantener. Las arquitecturas monolíticas tradicionales a menudo sufren de despliegues complejos, problemas de dependencias en diferentes entornos y cuellos de botella en el rendimiento cuando el volumen de usuarios crece.

El desafío era diseñar un **Sistema de Gestión de Aprendizaje (LMS)** desde cero que no solo ofreciera una experiencia de usuario fluida para estudiantes y profesores, sino que también estuviera respaldado por una infraestructura escalable, portable y completamente definida por código.

## La Solución Arquitectónica

Para abordar este reto, se implementó una **arquitectura orientada a servicios orquestada mediante Docker**. Esto permitió desacoplar la capa de persistencia de datos, el servidor de aplicación y el enrutamiento web, garantizando entornos idénticos desde desarrollo hasta producción.

El núcleo del sistema fue desarrollado utilizando **Django 5.2** (Arquitectura MVT y ORM robusto), complementado con una **API RESTful** para permitir integraciones futuras y consumo de datos estructurados de forma ágil.

### Stack Tecnológico y Componentes

La infraestructura del proyecto (IaC) define una orquestación en la que cada contenedor tiene una responsabilidad única y optimizada:

- **Orquestador (Docker Compose):** Gestión del aislamiento de red, volúmenes persistentes y el despliegue unificado de todos los servicios.
- **Servidor Web y Proxy Inverso (Nginx):** Encargado de servir archivos estáticos/media de manera ultra rápida y actuar como proxy inverso redirigiendo el tráfico dinámico.
- **Servidor WSGI (Gunicorn):** Configurado con 3 _workers_ para permitir el procesamiento concurrente de múltiples peticiones HTTP de forma eficiente.
- **Persistencia (PostgreSQL 15):** Base de datos relacional elegida por su fiabilidad en la gestión de integridad referencial para los registros de estudiantes, cursos y calificaciones.
- **Enriquecimiento de Datos (API Externa):** Integración nativa con la **API de Google Books (v1)**, permitiendo el autocompletado automático de metadatos de recursos (título, autor, portada) a partir de un simple código ISBN.

### Diseño de la API REST y Despliegue

Además de la interfaz HTML generada por el servidor, se expusieron Endpoints JSON seguros y paginados a través de **Django REST Framework (DRF)**. Esto permite consumir recursos del catálogo de cursos de manera programática.

Gracias a la estandarización mediante contenedores, el despliegue del proyecto (creación de base de datos, resolución de dependencias, migración de esquemas y recolección de estáticos) se reduce a comandos simples (`docker compose up -d --build`), eliminando la fricción operativa y garantizando la escalabilidad horizontal del servicio.

## Conclusión

El desarrollo de este Sistema de Gestión de Aprendizaje demostró la inmensa ventaja de adoptar infraestructura como código (IaC) desde el inicio del ciclo de vida del software. La containerización estricta con Docker no solo eliminó el clásico problema de dependencias rotas entre entornos, sino que proporcionó una arquitectura orquestada y predecible donde Nginx, Gunicorn y PostgreSQL operan en total simbiosis.

Esta separación de responsabilidades, sumada a la solidez de Django para la lógica de negocio y Django REST Framework para la exposición de datos, da como resultado un sistema escalable, altamente resiliente y preparado para futuras integraciones de terceros.
