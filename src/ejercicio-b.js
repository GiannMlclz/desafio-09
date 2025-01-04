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