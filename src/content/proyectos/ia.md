---
title: "Aprendizaje Supervisado - ML"
description: "Modelos de Machine Learning para predicción y clasificación utilizando algoritmos avanzados de aprendizaje supervisado."
tech: "Python • Redes Neuronales • Pandas • Matplotlib"
link: "https://github.com/Pabl0Aranda/Proyecto-IA"
orden: 5
---

## Análisis

El cruce masivo de datos sobre hábitos de vida (consumo de cafeína, actividad física) y parámetros de salud (calidad del sueño, frecuencia cardíaca) esconde patrones sumamente complejos. Extraer conclusiones precisas de miles de registros va más allá de la estadística tradicional; requiere la aplicación de algoritmos capaces de aprender y generalizar.

El objetivo principal de este proyecto fue construir, entrenar y evaluar modelos de **Aprendizaje Automático Supervisado** desde cero. En lugar de utilizar librerías de "caja negra" que ocultan el funcionamiento matemático subyacente, el reto consistió en implementar las arquitecturas de aprendizaje de forma manual para comprender en profundidad el cálculo de gradientes, la optimización y la convergencia.

## Dataset

Para el entrenamiento y validación de los modelos, se procesó un dataset de 10,000 registros que reflejan patrones del mundo real sobre el consumo de café y el comportamiento del sueño a lo largo de 20 países.

Las características principales incluyen variables numéricas y categóricas como:

- Ingesta de cafeína (mg) y tazas de café.
- Horas y calidad de sueño.
- Frecuencia cardíaca (bpm) y niveles de estrés.
- Índice de Masa Corporal (BMI) y actividad física.

## Implementación de Modelos Clásicos

Se desarrollaron tres enfoques distintos para abordar problemas tanto de regresión continua como de clasificación multiclase:

1. **Regresión Lineal:** Para modelar relaciones continuas (por ejemplo, impacto de miligramos de cafeína sobre las horas exactas de sueño).
2. **Regresión Logística:** Como modelo base de clasificación para inferir probabilidades sobre categorías discretas (ej. Riesgo de problemas de salud).
3. **Redes Neuronales Artificiales (ANN):** Para capturar dependencias no lineales y altamente complejas entre múltiples variables simultáneamente.

### Análisis Profundo de Redes Neuronales

La implementación de la Red Neuronal incluyó un riguroso proceso de experimentación y _tunning_ de hiperparámetros:

- **Impacto de la Arquitectura:** Se evaluó la capacidad de representación comparando tres arquitecturas distintas: pequeña (1 capa, 8 neuronas), media (1 capa, 64 neuronas) y profunda (2 capas ocultas, 64+32 neuronas), documentando el trade-off entre el coste computacional y la precisión (_accuracy_).
- **Control de Sobreajuste (Overfitting):** Se generaron curvas de aprendizaje monitoreando la función de pérdida a lo largo de diferentes épocas (10, 50, 200). Esto permitió identificar el punto óptimo de convergencia y evitar el sobreentrenamiento frente al conjunto de validación.
- **Análisis de Errores y Matriz de Confusión:** En lugar de mirar solo el porcentaje de acierto, se realizó una auditoría de falsos positivos y falsos negativos. Se analizaron instancias específicas mal clasificadas para entender si el modelo estaba sesgado por la distribución de los atributos de entrada.

## Conclusión

El desarrollo de este proyecto subraya la importancia fundamental de entender la matemática y la lógica detrás del Machine Learning. Implementar redes neuronales y algoritmos de regresión desde cero no solo otorga una ventaja inmensa a la hora de diagnosticar problemas (como desvanecimiento de gradiente o sobreajuste), sino que forja un criterio sólido para decidir qué arquitectura es la más adecuada dependiendo del volumen y la varianza de los datos disponibles.
