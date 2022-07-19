// definir
class Parafuso {  //Superclasse - abstrata
  constructor(){
    if (this.constructor === Parafuso)
    throw new Error('Classe abstrata não pode ser instanciada')
  }
  get tipo(){
    throw new Error('Metodo"get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso {
  constructor(){super()}

  get tipo(){
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor(){super()}

  get tipo(){
    return 'philips'
  }
}

class Allen extends Parafuso {}

// criar e usar
// new Parafuso() // 'Classe abstrata não pode ser instanciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
// console.log(allen.tipo) // 'Metodo "get tipo()" precisa ser implementado

// Nesse exemplo, só existe parafuso se ele for de algum tipo especifico como: Fenda, Philips ou Allen