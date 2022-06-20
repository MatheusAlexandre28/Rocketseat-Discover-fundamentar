// Diretorio local, onde esta o arquivo que estamos executando
// console.log(__dirname)

// Caminho completo + nome do arquivo
// console.log(__filename)

// require() // modulos nativos
const path = require('path')
console.log(path.basename(__filename))