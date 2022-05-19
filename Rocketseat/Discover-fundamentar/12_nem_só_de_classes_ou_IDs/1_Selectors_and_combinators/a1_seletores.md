# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos

* Element selector
    - Todos os elementos HTML
* ID selector
    - Um elemento que tenha um atributo`id`.
    - Cada id deverá ser unico.
* Class selector
    - Os elementos que tenha um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute selector
    - Um elemento que tenha um atributo especifico.
* Pseudo-class selector
    - Elementos em um estado especifico


## Multiplos
Voce podera selecionar multiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por virgulas para isso.
'''css
h1, p, a {
    color: red;
}
'''