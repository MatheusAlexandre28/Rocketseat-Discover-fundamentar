# flex-wrap

- Podems usar multi linhas.
- Cada nova linha, um novo flex container

```HTML
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```
```HTML
.box {
  display: flex;
  flex-wrap: wrap;          // faz conq se aumentarmos ou diminuirmos a nossa window ele cria novos axis(eixos), ou seja, ele faz conq o conteudo fique um abaixo do outro ou totalmente um ao lado do outro conforme vc muda o tamanho da window
  justify-content: flex-end;    // vc tbm pode usar isso, dependendo do tamanho da window ele vai ser aplicado para cada conteudo
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  width: 80px;          //define o tamanho de cada conteudo para que ocorra a quebra no wrap
}
```
```HTML
.box {
  display: flex;
  flex-wrap: wrap-reverse;      // deixa ao contrario a ordem de apresentacao de conteudo
  justify-content: flex-end;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  width: 80px;
}
```