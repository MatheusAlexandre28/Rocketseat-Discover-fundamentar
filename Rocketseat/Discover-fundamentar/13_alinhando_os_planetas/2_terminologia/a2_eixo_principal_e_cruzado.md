# Terminologia

- axis
    - main
        - start, end
    - cross
        - star, end

``` HTML
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```CSS main
.container{   
    display: flex;  
    justify-content: flex-end; // joga para o final do eixo 
}
```
```CSS cross
.container{   
  display: flex;  
  flex-direction: column; // coloca em coluna
  justify-content: flex-end; // tira do start e coloca no end
  height: 100vh; // para usar 100% da view port da tela
}
```