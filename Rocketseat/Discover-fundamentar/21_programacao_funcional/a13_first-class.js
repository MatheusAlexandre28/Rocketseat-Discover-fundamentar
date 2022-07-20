// # First-class function

// - Podem estar em qualquer lugar, inclusive, como parametro de outras funções
// - A função podera ser entendida como uma variavel

const sayMyName = () => console.log('Matheus')
const runFunction = fn => fn()

runFunction(sayMyNmae)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))

