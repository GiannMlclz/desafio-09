# Desafio N° 09 - JavaScript

## Estructuras condicionales y repetitivas

## Ejercicio n° 1

* Realizar un programa en Javascript que cumpla con los siguientes puntos:

1. Crear una variable con un valor numérico libre:

 Esto debe generar en la consola lo siguiente:
 Gato #1: 😺
 Gato #2: 😸
 Gato #3: 😹
 Gato #4: 😺
 Gato #5: 😸
 Gato #6: 😹
 Gato #7: 😺
 Gato #8: 😸
 Gato #9: 😹
 Gato #10: 😺
 Noten que son 3 emojis distintos que se se van intercalando.
 La consola reflejará los cambios según el contenido de la variable.
 var cantidadDeGatos = 1;
 Gato #1: 😺
 var cantidadDeGatos = 4;
 Gato #1: 😺
 Gato #2: 😸
 Gato #3: 😹
 Gato #4: 😺
 (Siempre son los mismos 3 emojis intercalados).

 ```sh

 for (let i = 0; i < cantidadDeGatos; i++) {
    let gatosArray = ['😺', '😸', '😹']
    let emojis = gatosArray[i-1]
    emojis = gatosArray[i%3]

    console.log(`Gato #${i + 1}: ${emojis}`)
}

* En este ejercicio use el operador for() para crear un bucle de los array de gatos, utilize el resto(%) para que se convierta en un bucle, que repita el mismo patron de emojis segun las veces que eligamos que se repita.
```

## Ejercicio n°2
