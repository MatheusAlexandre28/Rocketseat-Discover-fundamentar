class Atleta {
  peso;
  categoria;

  constructor(peso){
    this.peso = peso
  }

  definirCategoria(){
    if(this.peso <= 50 ){
      this.categoria = 'infantil'
    }
    else if(this.peso <= 65 ){
      this.categoria = 'juvenil'
    }
    else{
      this.categoria = 'adulto'
    }
  }
}

class Lutador extends Atleta {
  constructor(peso){
    super(peso)
  }
}