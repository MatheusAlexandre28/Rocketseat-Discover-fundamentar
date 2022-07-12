// Array no código

const pilotos = ['Senna', 'Prost', 'Schumacher', 'hameilton']

// a indexação (index) começa pelo numero 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// acessar o tamanho do array
console.log(pilotos.length)

// iteravel
for (let piloto of pilotos) {
  console.log(piloto)
}

// adicionar elemento
pilotos.push('Alison')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos)
