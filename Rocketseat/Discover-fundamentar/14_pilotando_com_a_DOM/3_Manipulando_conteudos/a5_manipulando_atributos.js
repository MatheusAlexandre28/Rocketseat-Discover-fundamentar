// manipulando elementos
// Atribbutos
// setAttribute (coloca atributo na tag)
// getAttribute (pega o atributo da tag)
// removeAttribute 

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')

console.log(headerId.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')