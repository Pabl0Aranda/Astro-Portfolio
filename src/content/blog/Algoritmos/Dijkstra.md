---
title: "Algoritmo de Dijkstra"
date: 2026-03-04
description: "Usos del algoritmo de Dijkstra y su relación con las redes y conexiones."
draft: true
category: Algoritmia
---

Google Maps sabe exactamente cuál es la ruta más rápida para llegar a tu destino esquivando el tráfico, un mensaje de WhatsApp cruza el mundo a través de miles de servidores en milisegundos. Todo esto se apoya en la teoría de grafos y en una de las mentes más innovadoras de la ingeniería informática: **Edsger W. Dijkstra**.

Creado en 1956 y publicado en 1959, el algoritmo de Dijkstra es la solución perfecta y definitiva al problema de encontrar el camino más corto entre un nodo origen y todos los demás nodos en un grafo con pesos no negativos.

## Cómo Funciona

Para entender a Dijkstra, primero debemos imaginar el problema como un mapa. Las ciudades son los **nodos** (o vértices) y las carreteras que las unen son las **aristas**. Cada carretera tiene un coste asociado (distancia, tiempo, peaje o latencia), al que llamamos **peso**.

El algoritmo sigue una lógica voraz (*greedy approach*):

1. **Inicialización:** Asigna una distancia tentativa de `0` al nodo de inicio y de `infinito` a todos los demás. Marca todos los nodos como "no visitados".
2. **Evaluación:** Desde el nodo actual, calcula la distancia a todos sus vecinos no visitados sumando el peso de la arista que los conecta. Si esta nueva distancia es menor que la distancia tentativa guardada previamente, actualiza el valor.
3. **Avance:** Una vez revisados todos los vecinos del nodo actual, márcalo como "visitado". Un nodo visitado no se volverá a comprobar.
4. **Iteración:** Selecciona el siguiente nodo no visitado con la distancia tentativa más pequeña y repite el proceso hasta llegar al nodo destino (o hasta visitar todos los nodos).

## Complejidad Computacional

El rendimiento de este algoritmo depende en gran medida de las estructuras de datos que utilicemos para implementarlo.

Si implementamos la lista de nodos no visitados como un array simple (o lista), el tiempo de búsqueda del nodo con la distancia mínima toma $O(V)$, lo que nos da una complejidad temporal total de:
$$O(V^2)$$
Donde $V$ es el número de vértices.

Sin embargo, en aplicaciones de ingeniería de software modernas, solemos utilizar una **Cola de Prioridad** (típicamente implementada con un *Min-Heap*) para extraer el nodo con la distancia mínima de forma mucho más eficiente. Esto reduce drásticamente la complejidad temporal a:
$$O(E + V \log V)$$
Donde $E$ representa el número de aristas (conexiones). Esta optimización es crucial cuando trabajamos con redes masivas donde los nodos tienen pocas conexiones relativas a la inmensidad de la red (grafos dispersos).

## Su relación vital con las Redes y Conexiones

Como Ingeniero en Sistemas de Información, la magia de Dijkstra no se queda en la pizarra; es el motor que mantiene viva la infraestructura tecnológica global. Sus usos más críticos incluyen:

* **Protocolos de Enrutamiento (OSPF):** El protocolo *Open Shortest Path First* es el estándar en las redes corporativas y en gran parte de la columna vertebral de Internet. Cada router construye una base de datos topológica de la red y ejecuta Dijkstra para calcular el "Árbol de Caminos Más Cortos". Así deciden instantáneamente por qué cable de fibra óptica enviar tu paquete de datos.
* **Redes de Telecomunicaciones:** Al establecer circuitos virtuales o enrutar llamadas en infraestructuras VoIP, el algoritmo ayuda a minimizar la latencia (el "peso" de la arista) para evitar que el audio se corte o llegue con retraso.
* **Sistemas de Información Geográfica (GPS):** Aunque hoy en día aplicaciones como Waze o Google Maps utilizan heurísticas más complejas (como el algoritmo $A^*$ o jerarquías de contracción), el algoritmo de Dijkstra sigue siendo la base teórica subyacente sobre la que se construyen los motores de navegación modernos.

## Conclusión

El algoritmo de Dijkstra es un recordatorio brillante de cómo un concepto matemático abstracto puede convertirse en la piedra angular de la ingeniería moderna. Dominar este tipo de algoritmos no solo te ayuda a superar entrevistas técnicas, sino que te otorga una comprensión profunda de cómo diseñar software que escale en el mundo real.
