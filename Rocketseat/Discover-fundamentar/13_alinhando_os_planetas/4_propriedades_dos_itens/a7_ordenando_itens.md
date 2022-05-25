# order (lembrando que nao usar no HTML pois é só para vermos, e nao tem semantica ou assesibilidade)

```HTML
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```
```CSS
.box {
  display: flex;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
}

.box div:nth-child(1) {
  order: 1;             // tira a ordem dos items mas nao tem acessibilidade
}

.box div:nth-child(2) {
  order: 0;
}

.box div:nth-child(3) {
  order: 0;
}

.box div:nth-child(4) {
  order: -1;
}








```