---
title: "Optimización de Algoritmos"
description: "Implementación de metaheurísticas (Recocido Simulado y Búsqueda Tabú) para la resolución de problemas de optimización combinatoria complejos."
tech: "Java • Algoritmia Avanzada • Metaheurísticas"
link: "https://github.com/Pabl0Aranda/Algorithms"
orden: 7
---

## El Desafío Computacional

Existen problemas en el mundo real, como la logística de rutas o la asignación de horarios, que pertenecen a la categoría matemática de problemas **NP-Hard**. Un ejemplo clásico es el _Problema del Viajante de Comercio (Traveling Salesman Problem - TSP)_.

Intentar resolver estos problemas evaluando todas las combinaciones posibles (fuerza bruta) es computacionalmente imposible para entradas grandes, ya que el tiempo de ejecución crece factorialmente. El desafío en la ingeniería de software moderna es encontrar soluciones _suficientemente buenas_ (casi óptimas) en un tiempo razonable, lo cual requiere el uso de **metaheurísticas avanzadas**.

## El Enfoque y Algoritmos Implementados

Para abordar estos retos de optimización combinatoria, desarrollé este proyecto estructurado íntegramente en **Java**, implementando desde cero dos de los algoritmos de búsqueda más potentes del sector:

### 1. Simulated Annealing (Recocido Simulado)

Inspirado en el proceso físico de enfriamiento y cristalización de los metales, este algoritmo probabilístico está diseñado para escapar de los _mínimos locales_.

- **Mecanismo:** Al principio de la ejecución (cuando la "temperatura" es alta), el algoritmo acepta soluciones peores con alta probabilidad, permitiéndole explorar ampliamente el espacio de búsqueda. A medida que la temperatura desciende, el sistema se estabiliza convergiendo hacia el óptimo global.

### 2. Tabu Search (Búsqueda Tabú)

A diferencia del recocido simulado, la Búsqueda Tabú es un algoritmo determinista que utiliza el concepto de **memoria a corto plazo**.

- **Mecanismo:** Mientras el algoritmo explora iterativamente las soluciones vecinas, guarda los movimientos recientes en una _lista tabú_. Esto evita que el algoritmo se quede atascado en bucles infinitos (ciclos) y lo fuerza a explorar nuevas áreas prometedoras del espacio de soluciones.

## Estructura y Fundamentos Teóricos

El repositorio no se limita a ser una simple colección de código fuente. Está diseñado con un fuerte rigor académico y arquitectónico:

- Separación clara por algoritmo (`Simulated Annealing/` y `Tabu Search/`).
- Inclusión de **documentación teórica formal en PDF** para cada algoritmo, detallando el planteamiento matemático, la demostración de convergencia y la justificación de los hiperparámetros elegidos.

## Conclusión

La implementación de estas metaheurísticas refuerza una habilidad crítica en el desarrollo backend e ingeniería de datos: saber cómo balancear la perfección matemática contra las limitaciones computacionales y de tiempo real. Escribir estos algoritmos en un lenguaje tipado y orientado a objetos como Java no solo optimiza su ejecución, sino que demuestra capacidad para traducir conceptos físicos y matemáticos altamente abstractos en código estructurado, robusto y aplicable a problemas reales de logística y ruteo.
