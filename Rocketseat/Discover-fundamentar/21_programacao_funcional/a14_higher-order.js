// # Higher-order function

// - funções que recebem funções como argumentos
// - Funções que poderão retornar outras funções

// Exemplo com .map() JS
const numbers = [2, 4, 8, 16]

const square = n => n * n 

const squaredNumber = numbers.map(square)

// Exemplo de um retorno de função
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600)(() => console.log('waiting 600ms'))

