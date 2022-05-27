Crie uma galeria de fotos onde teremos 3 colunas e 9 fotos.
Deixa um espaço de .8rem entre os elementos da galeria

codigo prof

```HTML
<div class="gallery">
  <img src="https://source.unsplash.com/random?id=123" alt="">
  <img src="https://source.unsplash.com/random?id=124" alt="">
  <img src="https://source.unsplash.com/random?id=125" alt="">
  <img src="https://source.unsplash.com/random?id=126" alt="">
  <img src="https://source.unsplash.com/random?id=121" alt="">
  <img src="https://source.unsplash.com/random?id=122" alt="">
  <img src="https://source.unsplash.com/random?id=128" alt="">
  <img src="https://source.unsplash.com/random?id=129" alt="">
  <img src="https://source.unsplash.com/random?id=128" alt="">
</div>
```
```CSS
img {
  width: 30%;
  height: auto;  
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: center;
}
```