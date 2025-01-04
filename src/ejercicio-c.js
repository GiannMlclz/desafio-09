
console.warn('/-------------------------/')
console.warn('/------Ejercicio n°3------/')
console.warn('/-------------------------/')

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for(let i = 1; i <= cantidadDeGatos; i++) {
    let gatosCaminando = '🐈'
    if (i % 2 == 0) {
        gatosCaminando += '🐈‍⬛'
    }

    let patitas = ""
    for (let x = 1; x <= cantidadDePasos; x++) {
        patitas+='🐾'
       
    }

    console.log(`gato #${i}: ${gatosCaminando}${patitas}`)
}