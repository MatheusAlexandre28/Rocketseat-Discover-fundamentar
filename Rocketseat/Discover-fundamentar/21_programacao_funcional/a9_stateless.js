// # Stateless

// - não guarda estado
// - A função só conhece dados entregues a ela
// - A resposta não podera variar

let number = 2;

// Stateful function
function square() {
  return number * number
}

number = square()

// stateless function
const square = n => n * n;