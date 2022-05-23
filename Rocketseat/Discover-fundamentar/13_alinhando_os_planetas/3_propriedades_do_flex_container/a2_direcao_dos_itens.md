# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)
 
```HTML
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```
```CSS row
.container {
  display: flex;        // transforma a class em flexbox
  flex-direction: row;  // vem por padrao em row mas podemos colocar row-reverse assim fica ao contrario até os textos
}
```
```CSS
.container {
  display: flex;        
  flex-direction: column-reverse;   // fica na horizontal
  height: 80vh          // para tirar o automatico que vem por padrao, se nao tirar ele vai pegar somente a altura do conteudo que tem dentro das <div>
}
```

