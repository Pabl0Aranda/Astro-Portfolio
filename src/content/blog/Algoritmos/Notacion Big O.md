---
title: "Notación Big O"
date: 2026-03-12
description: "Qué es, para que nos sirve en el mundo de la Algoritmia la notación Big O y sus tipos de notación en comparativas."
draft: false
category: Algoritmia
---

## Qué es la notación Big O y cómo funciona

La notación **Big O** nos aclara un número de operaciones que un algoritmo realizará. Esta notación es útil puesto que existen demasiadas variables a tener en cuenta como para saber cuánto va a tardar en segundos en ejecutarse un algoritmo.

Big O nos establece el peor de los casos para el cual un algoritmo puede ser ejecutado.

Un claro ejemplo de este funcionamiento podría ser el siguiente:

Imagina que quieres buscar en un libro una frase concreta, y usamos un algoritmo de búsqueda simple. El algoritmo tardará O(n) veces de ejecución en encontrar dicha frase porque iterará a través de todo el libro de forma secuencial. "n" representa cada frase que el algoritmo analizará hasta acabar el libro. En el peor de los casos, tu frase se encontrará al final del libro, aunque puede darse el mejor de los casos, que sea la primera frase del libro, lo cual obtendría una complejidad de O(1).

## Los tiempos de ejecución de los algoritmos

Para entender la notación Big O, no debemos pensar en minutos o segundos, sino en el crecimiento del número de operaciones. A medida que el tamaño de la entrada ($n$) aumenta, ¿cómo aumenta el tiempo de ejecución?

Aquí detallamos los tipos de complejidad más comunes, ordenados de mayor a menor eficiencia:

1. **Tiempo constante**: $O(1)$

Es el escenario ideal. El algoritmo tarda lo mismo sin importar si le das 10 elementos o 1 millón.

_Ejemplo_: Acceder a un elemento de un array mediante su índice.

2. **Tiempo logarítmico**: $O(\log n)$

Este tiempo es característico de algoritmos que "dividen el problema a la mitad" en cada paso. Es extremadamente rápido.

_Ejemplo_: La búsqueda binaria. Si buscas un nombre en una agenda telefónica de 1000 páginas, no vas una por una; abres por la mitad y descartas la parte que no necesitas.

_Nota_: Como bien señala FreeCodeCamp, mientras que una búsqueda lineal en 100 elementos tarda 100 pasos, una búsqueda binaria solo tardaría unos 7 pasos ($2^7 = 128$).

3. **Tiempo lineal**: $O(n)$

El tiempo de ejecución crece en proporción directa al tamaño de la entrada. Si duplicas los datos, duplicas el tiempo.

_Ejemplo_: Un bucle for simple que recorre una lista para encontrar el valor máximo.

4. **Tiempo log-lineal**: $O(n \log n)$

Es la complejidad común de los algoritmos de ordenación eficientes.

_Ejemplo_: Merge Sort o Quick Sort. Son algoritmos que dividen el problema (log n) y en cada división realizan una comparación lineal (n).

5. **Tiempo cuadrático**: $O(n^2)$

Aquí es donde debemos empezar a tener cuidado. El tiempo crece al cuadrado de la entrada. Si tienes 10 elementos, realizas 100 operaciones.

_Ejemplo_: Bucles anidados (un for dentro de otro for). Es típico de algoritmos de ordenación lentos como el Bubble Sort (ordenación de burbuja).

![Gráfica de Complejidad Big O](./img/Big%20O.png)

---

## Visualización de jerarquía de complejidad

No todas las complejidades son iguales. Para un desarrollador, es vital saber cuándo un algoritmo escala y cuándo explota. Podemos clasificar las notaciones de la más eficiente a la menos eficiente de la siguiente manera:

$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$$

Como se describe en el libro "Introduction to Algorithms" (CLRS), la diferencia es abismal cuando $n$ crece.

_Ejemplo_: si $n=100$

- Un algoritmo $O(n)$ hace 100 operaciones.
- Un algoritmo $O(n^2)$ hace 10,000 operaciones.
- Un algoritmo $O(2^n)$ haría aproximadamente 1,267,650,600,228,229,401,496,703,205,376 operaciones.

## Complejidad Temporal vs Complejidad Espacial

A menudo nos centramos solo en cuánto tarda un algoritmo (Complejidad Temporal), pero en el mundo de la algoritmia y los sistemas embebidos o de alto rendimiento, también importa cuánto ocupa (Complejidad Espacial).

- **Complejidad Temporal**: Se refiere al número de operaciones (lo que hemos visto hasta ahora).
- **Complejidad Espacial**: Se refiere a la cantidad de memoria extra (RAM) que el algoritmo necesita para ejecutarse.

_Ejemplo_: Si para ordenar una lista de $n$ elementos creas una copia nueva de esa lista, tu complejidad espacial es $O(n)$. Si ordenas la lista sobre el mismo array original, tu complejidad espacial es $O(1)$.

![Complejidad Temporal vs Complejidad Espacial](./img/Complejidad%20Temporal%20vs%20Espacial.png)

---

## Reglas para calcular Big O

1. **Ignora las constantes**: $O(2n)$ se convierte en $O(n)$. A Big O solo le importa la tendencia de crecimiento a largo plazo, no el número exacto.
2. **Ignora los términos no dominantes**: En una función como $O(n^2 + n)$, nos quedamos con $O(n^2)$. Cuando $n$ es un millón, el valor de $n$ es insignificante comparado con $n^2$.
3. **El peor de los casos**: Siempre diseñamos pensando en lo peor que podría pasar (por ejemplo, que el elemento que buscamos sea el último de la lista).

## ¿Por qué es importante en la Algoritmia?

En el desarrollo de software profesional, la diferencia entre un algoritmo $O(n)$ y uno $O(n^2)$ puede significar que una aplicación funcione de forma fluida o que se bloquee por completo al recibir datos reales.

Como se menciona en el libro "Clean Code", escribir código que funcione es solo el primer paso, escribir código eficiente es lo que define a un ingeniero de software senior. La notación Big O nos proporciona un lenguaje universal para comunicar esta eficiencia sin depender del hardware (procesador, RAM) en el que se ejecute el código.

## Ejemplo comparativo

### Complejidad Lineal $O(n)$

Este algoritmo recorre la lista una sola vez. Si la lista crece, el tiempo crece de forma proporcional.

```javascript
// Búsqueda de un elemento en un array
function buscarElemento(lista, objetivo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === objetivo) {
      return `Encontrado en la posición ${i}`;
    }
  }
  return "No encontrado";
}

const usuarios = ["Ana", "Beto", "Carla", "David"];
console.log(buscarElemento(usuarios, "Carla")); // O(n)
```

### Complejidad Cuadrática $O(n^2)$

Este algoritmo recorre la lista una sola vez. Si la lista crece, el tiempo crece de forma proporcional.

```javascript
// Buscar duplicados en una lista (forma ineficiente)
function tieneDuplicados(lista) {
  for (let i = 0; i < lista.length; i++) {
    // Bucle externo
    for (let j = 0; j < lista.length; j++) {
      // Bucle interno
      if (i !== j && lista[i] === lista[j]) {
        return true; // Duplicado encontrado
      }
    }
  }
  return false;
}

const numeros = [1, 2, 3, 4, 5, 2];
console.log(tieneDuplicados(numeros)); // O(n^2)
```

## Conclusión

La notación Big O puede parecer intimidante al principio, llena de matemáticas y abstracciones, pero en el fondo trata sobre un concepto muy pragmático: escribir software que escale. No se trata de memorizar fórmulas matemáticas complejas, sino de desarrollar un instinto para detectar cuellos de botella antes de que lleguen a producción.

Nuestro primer instinto es hacer que el código funcione. Sin embargo, dar el salto de "funciona" a "funciona eficientemente bajo estrés" es lo que marca la diferencia en el mundo del desarrollo. Entender Big O te da las herramientas para tomar decisiones arquitectónicas fundamentadas.

No hay que obsesionarse con lograr $O(1)$ o $O(\log n)$ en absolutamente cada línea de código si estás manejando conjuntos de datos microscópicos. Un código legible siempre es preferible a un código hiper-optimizado pero incomprensible, a menos que el rendimiento sea estrictamente necesario.

Aplicar la notación Big O donde realmente importa: en bucles críticos, en el procesamiento de grandes volúmenes de datos y al elegir qué estructuras de datos (como Arrays, Hash Maps o Sets) utilizar en tu día a día.

## Referencias

🔗 **[Artículo de FreeCodeCamp](https://www.freecodecamp.org/espanol/news/explicacion-de-la-notacion-big-o-con-ejemplo/)**

Grokking Algorithms (Aditya Bhargava)

Introduction to Algorithms (Thomas H. Cormen)

Clean Code: A Handbook of Agile Software Craftsmanship (Robert C. Martin)
