---
title: "Repositorio Leetcode"
description: "Colección de soluciones optimizadas para problemas algorítmicos complejos, categorizados por estructura de datos."
tech: "Python • Algoritmia • Estructuras de Datos"
link: "https://github.com/Pabl0Aranda/leetcode"
orden: 6
---

## El Problema

El dominio de las estructuras de datos y la algoritmia es el pilar fundamental para escribir código eficiente y escalable en la ingeniería de software. A menudo, las soluciones a problemas complejos carecen de contexto: es fácil encontrar código que funcione, pero es difícil encontrar código que explique _por qué_ funciona y _cuál_ es su coste computacional real.

El desafío era crear un repositorio que no solo sirviera como un registro personal de preparación técnica para entrevistas, sino como una verdadera base de conocimiento documentada donde cada problema estuviera desglosado metodológicamente.

## El Enfoque y Estructura

Para resolver esto, diseñé una arquitectura de repositorio altamente estructurada, categorizando los problemas por estructura de datos subyacente (Grafos, Árboles, Programación Dinámica, etc.) y por dificultad (Fácil, Medio, Difícil).

Más allá del código en sí (principalmente en Python), cada solución está acompañada de una documentación rigurosa que incluye:

- **Intuición del Problema:** El proceso mental y las observaciones que guían hacia la solución.
- **Enfoque (Approach):** Un desglose paso a paso de la implementación.
- **Análisis de Complejidad:** Evaluación detallada de la complejidad temporal (Time) y espacial (Space) usando notación Big O.

## Fragmento de Código Clave: Búsqueda Binaria Avanzada

Un excelente ejemplo del nivel de optimización de las soluciones es el problema _Find the median of two sorted arrays_. En lugar de fusionar los arrays en tiempo `O(n + m)`, la solución implementa una búsqueda binaria particionada que logra un rendimiento logarítmico `O(log(min(n, m)))`.

```python
def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:
    # Asegurar que nums1 sea el array más pequeño para optimizar la búsqueda binaria
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    x, y = len(nums1), len(nums2)
    low, high = 0, x

    while low <= high:
        partitionX = (low + high) // 2
        partitionY = (x + y + 1) // 2 - partitionX

        maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
        minRightX = float('inf') if partitionX == x else nums1[partitionX]

        maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
        minRightY = float('inf') if partitionY == y else nums2[partitionY]

        # Condición de partición correcta
        if maxLeftX <= minRightY and maxLeftY <= minRightX:
            if (x + y) % 2 == 0:
                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
            else:
                return float(max(maxLeftX, maxLeftY))
        elif maxLeftX > minRightY:
            high = partitionX - 1
        else:
            low = partitionX + 1

    raise ValueError("Los arrays de entrada no están ordenados o son inválidos.")
```

## Conclusión

El mantenimiento y la expansión continua de este repositorio de soluciones ha sido crucial para afianzar un pensamiento analítico profundo. Documentar las complejidades de tiempo y espacio, y esforzarse por encontrar el enfoque óptimo (no solo el que funciona), demuestra un compromiso real con la calidad del código, el rendimiento algorítmico y las mejores prácticas de la ingeniería de software.
