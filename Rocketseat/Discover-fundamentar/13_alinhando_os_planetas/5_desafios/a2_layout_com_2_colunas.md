Crie um layout com 2 colunas, uma ao lado da outra.
A coluna da esquerda devera ter 25% de tamanho e a coluna da direita devera ocupar todo o espaço que sobra.
Faça uma separação de 1rem entre os elementos 

code prof..

```HTML
<div class="container">
  <aside>Coluna esquerda</aside>
  <main>Coluna direita</main>
</div>
```

```CSS
.container {
  display: flex;
  gap: 1rem;
}

aside, main {
  border: 1px solid;
  height: 95vh;
}

aside {
  flex-basis: 25%;
}

main {
  flex: 1;
}
```