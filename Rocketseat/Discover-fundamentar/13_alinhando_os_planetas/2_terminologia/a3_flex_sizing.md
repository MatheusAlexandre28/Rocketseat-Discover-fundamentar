# Terminologia


- flex sizing
    - flexivel
    - altera width/height dos itens para preenchimento dos espaços do flex container

```HTML
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
```CSS
.container {                    // puxa a class 
  display: flex;                // transforma a class em flexbox
  border: 1px solid red;        // coloca uma borda (tamanha/solida/cor)
  height: 20vh;                 // o tamanho que essa borda vai ocupar na box
}

.item {                         // puxa a class filha
  background-color: gray;       // coloca cor na box inteira de cada filha
  border: 1px solid;            // coloca borda 
  flex: 1;                      // faz o flex-sizing preenche todo a box da <div> pai
}
```