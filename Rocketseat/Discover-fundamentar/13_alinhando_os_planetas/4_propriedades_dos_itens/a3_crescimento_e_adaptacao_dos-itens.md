# flex-grow

- O crescimento do item dentro do container em relação aos espaços vazios.

```CSS
.box {
  display: flex;
  /* flex-direction: column; */     // muda container para horizontal
  
  border: 1px solid red;
  
  /* height: 150px */   // da uma altura para o container(onde fica os items dentro)
}

.box div {
  border: 1px solid;
}

.box div:nth-child(3),
.box div:nth-child(2){      // aplica em elementos especificos
  flex-grow: 1; 
}

.box div:nth-child(1){
/*   flex-grow: 3; */
}
```