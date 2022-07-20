// # Funções puras

// - Não devera depender de nenhum dado externo a não ser o que foi passado como argumento
// - Não devera sofrer nenhuma interferencia do mundo externo a ela
// - Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
// - não terá nenhum efeito colateral no seu código
//   - Não irá modificar nenhum dado.
//   - Não irá guardar nenhum estado

// função impura

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parametro
function calculateCircumference(radius){
  return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
  name: 'Rafael Camarda',
  age: 'jovem'
}

function changeName(name){
  person.name = name
}

// Função pura

// Exeplo 1
const calculateCircumference = function (pi, radius){
  return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) =>
  pi * (radius + radius)

// Exemplo 2
const changePersonName = (person, name) => ({...person, name})