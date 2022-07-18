# Herança

  - Pais e filhos
  - Objetos podem herdar, ou estender, caracteristicas bases
  - Uma copia de atributos e metodos de outra classe


class Veiculo {
  rodas = 4;

  mover(direcao){}
  mover(direcao){}
}

class Moto extends Veiculo {
  constructor(){
    super() // puxar atributos e metodos do pai
    this.rodas = 2
  }
}

# Saiba
- Um objeto pode estender de outro objeto que pode estender de outro objeto
- facil reutilização de codigo