```HTML
<div class="page">
  <aside>Aside</aside>
  <main>
    main
    <section>Content 1</section>
    <section>Content 2</section>
    <section>Content 3</section>
  </main>
</div>
```

```CSS
* {             // pega tudo e deixa sem margin
  margin: 0;
}
.page {                 // pega o conteiner
  border: 2px solid;    // coloca uma borda na tela toda que esta no container
  min-height: 100vh;    // view height da tela toda
  display: flex;        // habilita o flex para todos os items e para o container
}
aside {                 
  background: green;    // deixa o aside verde
  flex: 1;              // coloca um flex-grow, ou seja, ele pega uma fração da tela para ele
}
main {
  background: lightblue;   
  flex: 2;
  
  display: flex;            // transforma o main em container tbm
  flex-direction: column;   // coloca na horizontal o eixo
}
main section:nth-child(1){  // pega um item do container main especifico
  background: lightgoldenrodyellow;
  flex: 2 0;                // pega uma fração com o flex-grow      
}
main section:nth-child(2){
  background: red;
  flex: 0 120px;            // tem apenas o flex-basis, no caso ele é o mais forte ent esmaga os outros flex-grow e flex-shrink
}
main section:nth-child(3){
  background: pink;
  flex: 1;
}








```