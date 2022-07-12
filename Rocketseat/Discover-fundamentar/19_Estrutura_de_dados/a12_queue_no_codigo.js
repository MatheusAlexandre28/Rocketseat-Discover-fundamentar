// # Queue no codigo

// Metodos fundamentais
// - enqueue(): adicionar um elemento ao final da fila 
// - dequeue(): remover o primeiro elemento a entrar na fila 

// Outros metodos poderao ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros. 

// Passo 1: Modelando
class Queue {
  constructor(){
    this.data = []
  }

  enqueue(item){
    this.data.push(item)
    console.log(`${item} chegou na fila`)
  }
  dequeue(){
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
  }
}

// passo 2: utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')
file.dequeue()
file.dequeue()
file.dequeue()