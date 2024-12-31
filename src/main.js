import './style.css'


var cantidadDeGatos = 10;
console.warn('/-------------------------/')
console.warn('/------Ejercicio n°1------/')
console.warn('/-------------------------/')

for (let i = 0; i < cantidadDeGatos; i++) {
    let gatosArray = ['😺', '😸', '😹']
    let emojis = gatosArray[i-1]
    emojis = gatosArray[i%3]

    console.log(`Gato #${i + 1}: ${emojis}`)
}

console.warn('/-------------------------/')
console.warn('/------Ejercicio n°2------/')
console.warn('/-------------------------/')

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

console.warn('/-------------------------/')
console.warn('/------Ejercicio n°3------/')
console.warn('/-------------------------/')