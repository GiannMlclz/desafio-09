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
b) Crear 2 variables con valores numéricos libres:
 var cantidadDeGatos = 5;

 var cantidadDePasos = 3;

 A partir de esas 2 variables, la consola debe mostrar lo siguiente:
 
 Gato #1:  🐈🐾🐾🐾

 Gato #2:  🐈🐾🐾🐾

 Gato #3:  🐈🐾🐾🐾

 Gato #4:  🐈🐾🐾🐾

 Gato #5:  🐈🐾🐾🐾

 Si se utilizan otros valores, el resultado en la consola debe adaptarse.

 var cantidadDeGatos = 2;
 var cantidadDePasos = 8;

 Gato #1:  🐈🐾🐾🐾🐾🐾🐾🐾🐾

 Gato #2:  🐈🐾🐾🐾🐾🐾🐾🐾🐾

 var cantidadDeGatos = 10;

 var cantidadDePasos = 4;

 Gato #1:  🐈🐾🐾🐾🐾

 Gato #2:  🐈🐾🐾🐾🐾

 Gato #3:  🐈🐾🐾🐾🐾

 Gato #4:  🐈🐾🐾🐾🐾

 Gato #5:  🐈🐾🐾🐾🐾

 Gato #6:  🐈🐾🐾🐾🐾

 Gato #7:  🐈🐾🐾🐾🐾

 Gato #8:  🐈🐾🐾🐾🐾

 Gato #9:  🐈🐾🐾🐾🐾

 Gato #10:  🐈🐾🐾🐾�

 ```sh
 var cantidadDeGatos = 5;
var cantidadDePasos = 3;

let patitas = ('🐾')
let gatoCaminando = ('🐈')

for(let i = 1; i <= cantidadDeGatos; i++) {
    patitas = ""

    for (let x = 1; x <= cantidadDePasos; x++) {
        patitas+='🐾'
       
    }

    console.log(`gato #${i}: ${gatoCaminando}${patitas}`)
}

* Para este ejercicio se pedia crear dos variables con valores libres, lo que hice fue utilizar dos for(), uno para cada emoji e incremente el valor de las patitas con +=.
```

## Ejercicio n°3

c) Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:

 var cantidadDeGatos = 10;

 var cantidadDePasos = 4;

 Gato #1: 🐈 🐾🐾🐾🐾

 Gato #2: 🐈‍⬛ 🐾🐾🐾🐾

 Gato #3: 🐈 🐾🐾🐾🐾

 Gato #4: 🐈‍⬛ 🐾🐾🐾🐾

 Gato #5: 🐈 🐾🐾🐾🐾

 Gato #6: 🐈‍⬛ 🐾🐾🐾🐾

 Gato #7: 🐈 🐾🐾🐾🐾

 Gato #8: 🐈‍⬛ 🐾🐾🐾🐾

 Gato #9: 🐈 🐾🐾🐾🐾
 
 Gato #10: 🐈‍⬛ 🐾🐾🐾�
