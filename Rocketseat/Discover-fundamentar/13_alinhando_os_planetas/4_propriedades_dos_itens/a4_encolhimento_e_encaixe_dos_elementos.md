# flex-shrink

- O encolher do item dentro do container

```CSS
.box {
  display: flex;
  /* flex-direction: column;    */  // deixa na horizontal 
  border: 1px solid red;
  /* height: 160px; */          // tire o width se for usar o column, e coloque ele pois agr virou altura e nao largura
  width: 160px;
}

.box div {
  flex-basis: 100px;        // bom para ver as modificações
  border: 1px solid;
}

.box div:nth-child(2), 
.box div:nth-child(3) {
  flex-shrink: 2;           // faz diminuir o elemento, valores abaixo de 1 como 0.4 fazem ele crescer
}
```
