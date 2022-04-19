# Shorthand

* junção de propriedades
* resumido
* legivel

'''css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

        
    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top; 


    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */
    font:italic bold .8em/1.2 Arial, sans-serif;

}

'''

## Detalhes

* nao ira considerar propriedades anteriores
* valores nao especificados irao assumir o valor padrao
* Geralmente, a ordem descrita nao importa, mas, se houver muitas propriedades
com valores semelhantes, podemos encontrar problemas

## propriedades que aceitam shorthand

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**