# align-items

- Alinhamento dos elementos no eixo cruzado

## valores

- stretch
- flex-start
- flex-end
- center

```CSS
.box {
  display: flex;
  
  /* flex-direction: column; */     // faz o msm mas agr o eixo é na horizontal
  align-items: stretch; // vem padrao o stretch, mas podemos colocar aqueles valores acima, podendo assim deixar todos os elementos em cima, em baixo, e no centro.
  
  border: 1px solid red;
  height: 150px;        // define o tamanho da caixa pai
}

.box div {
  border: 1px solid;    // para a gente ver os elementos mudando nos eixos
}
```