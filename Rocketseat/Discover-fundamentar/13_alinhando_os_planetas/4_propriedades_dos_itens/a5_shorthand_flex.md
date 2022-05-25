# flex

- shorthand
- flex-grow | flex-shrink | flex-basis
- podem ter 1, 2 ou 3 valores

```CSS
.box {                      // puxa o container com os items dentro
  display: flex;            // inicia o flexbox
  border: 1px dashed red;   // faz uma borda no container
}

.box div {              // puxa os items
  border: 1px solid;    // faz uma borda em cada item    
  flex: 1 0 40px;       // shorthand o primeiro 1 deixa tudo distribuido como igual, o segundo ja vimos e o terceiro caso o primeiro esteja 0 ele atribui um tamanho para cada item
}
```