Crie o <footer> de um site que contenha a data de criação do site.
Usando flex, alinhe o elemento do footer bem ao meio.
Deixe uma altura de .8rem para o footer.
O footer devera ficar no final da pagina

```HTML
<footer>
  2021
</footer>
```

```CSS
* {
  margin: 0;
}

body {
  min-height: 100vh;
  display: flex;
}

footer {
  margin-top: auto;
  
  background: gray;
  color white;
  
  height: 8rem;
  flex: 1;
  
  display: flex;
  align-items: center;
  justify-content: center;
}
```