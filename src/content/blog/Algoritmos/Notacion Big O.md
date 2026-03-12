---
title: "Notación Big O"
date: 2026-03-12
description: "Qué es y para que nos sirve en el mundo de la Algoritmia la notación Big O."
draft: true
category: Algoritmia
---

## Qué es la notación Big O y cómo funciona

La notación Big O nos aclara un número de operaciones que un algoritmo realizará. Esta notación es útil puesto que existen demasiadas variables a tener en cuenta como para saber cuánto va a tardar en segundos en ejecutarse un algoritmo.

Big O nos establece el peor de los casos para el cual un algoritmo puede ser ejecutado.

Un claro ejemplo de este funcionamiento podría ser el siguiente:

Imagina que quieres buscar en un libro una frase concreta, y usamos un algoritmo de búsqueda simple. El algoritmo tardará O(n) veces de ejecución en encontrar dicha frase porque iterará a través de todo el libro de forma secuencial. "n" representa cada frase que el algoritmo analizará hasta acabar el libro. En el peor de los casos, tu frase se encontrará al final del libro, aunque puede darse el mejor de los casos, que sea la primera frase del libro, lo cual obtendría una complejidad de O(1).

## Los tiempos de ejecución de los algoritmos

Para entender la notación Big O, no debemos pensar en minutos o segundos, sino en el crecimiento del número de operaciones. A medida que el tamaño de la entrada ($n$) aumenta, ¿cómo aumenta el tiempo de ejecución?

Aquí detallamos los tipos de complejidad más comunes, ordenados de mayor a menor eficiencia:

1. Tiempo constante:  $O(1)$Es el escenario ideal.

    - El algoritmo tarda lo mismo sin importar si le das 10 elementos o 1 millón.Ejemplo: Acceder a un elemento de un array mediante su índice.

    - Referencia: Según Thomas H. Cormen, estas operaciones son la base de la eficiencia, ya que su coste es independiente del tamaño del problema.

2. Tiempo logarítmico: $O(\log n)$

    - Este tiempo es característico de algoritmos que "dividen el problema a la mitad" en cada paso. Es extremadamente rápido.

    - Ejemplo: La búsqueda binaria.
    Si buscas un nombre en una agenda telefónica de 1000 páginas, no vas una por una; abres por la mitad y descartas la parte que no necesitas.

    - Nota: Como bien señala FreeCodeCamp, mientras que una búsqueda lineal en 100 elementos tarda 100 pasos, una búsqueda binaria solo tardaría unos 7 pasos ($2^7 = 128$).

3. Tiempo lineal: $O(n)$

    - El tiempo de ejecución crece en proporción directa al tamaño de la entrada. Si duplicas los datos, duplicas el tiempo.
    - Ejemplo: Un bucle for simple que recorre una lista para encontrar el valor máximo.

4. Tiempo log-lineal: $O(n \log n)$

    - Es la complejidad común de los algoritmos de ordenación eficientes.

    - Ejemplo: Merge Sort o Quick Sort. Son algoritmos que dividen el problema (log n) y en cada división realizan una comparación lineal (n).

5. Tiempo cuadrático: $O(n^2)$

    - Aquí es donde debemos empezar a tener cuidado. El tiempo crece al cuadrado de la entrada. Si tienes 10 elementos, realizas 100 operaciones.

    - Ejemplo: Bucles anidados (un for dentro de otro for). Es típico de algoritmos de ordenación lentos como el Bubble Sort (ordenación de burbuja).

![Gráfica de Complejidad Big O](./img/Big%20O.jpg)

## ¿Por qué es importante en la Algoritmia?

En el desarrollo de software profesional, la diferencia entre un algoritmo $O(n)$ y uno $O(n^2)$ puede significar que una aplicación funcione de forma fluida o que se bloquee por completo al recibir datos reales.

Como se menciona en el libro "Clean Code", escribir código que funcione es solo el primer paso; escribir código eficiente es lo que define a un ingeniero de software senior. La notación Big O nos proporciona un lenguaje universal para comunicar esta eficiencia sin depender del hardware (procesador, RAM) en el que se ejecute el código.
