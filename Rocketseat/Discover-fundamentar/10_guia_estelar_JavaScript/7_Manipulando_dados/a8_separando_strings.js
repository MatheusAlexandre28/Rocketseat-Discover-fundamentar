// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto onde eram espalos, coloque _

let text = "Eu quero viver o Amor!"
let myArray = text.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())