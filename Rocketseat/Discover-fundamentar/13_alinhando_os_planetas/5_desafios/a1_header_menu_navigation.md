# Header Menu Navigation

Crie o <header> de um site que contenha uma logo e um menu.
Um elemento devera ficar ao lado do outro.
A logo que ficara na extrema esquerda e o menu ficara na extrema direita.
Os itens do menu ficarao um ao lado do outro, com um espaço de .8rem entre eles.
O ultimo elemento do menu sera u botao de contato e voce podera utilizar o seletor :last-child para estilizar

 prof codigo....
```HTML
<header>
  <nav>
    <a href="#">LOGO</a>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>TESTIMONIALS</li>
      <li>CONTACT</li>
    </ul>
  </nav>
</header>
```

```CSS
* {
  margin: 0;
}

header {
  padding: 4rem;
  background: lightgray;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  align-items: center;
  gap: .8rem;
}

ul li:last-child{
  background: black;
  color: white;
  padding: .8rem;
}
```