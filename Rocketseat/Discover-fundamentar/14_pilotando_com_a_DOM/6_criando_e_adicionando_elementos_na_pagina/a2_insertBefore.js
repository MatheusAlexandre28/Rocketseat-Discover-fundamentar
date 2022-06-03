// Adicionando elementos
const div = document.createElement('div')
div.innerText = 'Ola devs'

// insertBefore
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)