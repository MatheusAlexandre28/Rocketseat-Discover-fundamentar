# flex-basis

```HTML
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

```CSS
.box {                      // puxa a class do HTML
  display: flex;            // habilita o flexbox
  /* flex-direction: column; */   // habilita para deixar na horizotal o eixo 
  
  border: 1px solid red;    // cria uma borda para vermos melhor
}

.box div {                  // puxa os items da class HTML
  border: 1px solid;        // cria borda para vermos melhor
  flex-basis: auto;         // modifica a largura dos elementos
}

.box div:nth-child(1) {     // puxa um item somente do class HTML
    /* width: 250px; */       // só pode ser usado se tiver em column o flex-direction
  /* height: 400px; */      // só pode ser usado se nao estiver em column o flex-direction
}
```