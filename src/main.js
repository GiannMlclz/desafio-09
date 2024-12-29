import './style.css'


var cantidadDeGatos = 10;

for (let i = 0; i < cantidadDeGatos; i++) {
    let gatosArray = ['😺', '😸', '😹']
    let emojis = gatosArray[i-1]
    emojis = gatosArray[i%3]

    console.log(`Gato #${i + 1}: ${emojis}`)
}
