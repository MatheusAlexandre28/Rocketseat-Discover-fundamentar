## Selecionando elementos com pseudo-classes

* :nth-of-type()

mesmo exemplo da aula passada, mas vc agr pode selecionar os filhos

<ul>
    <h3></h3>  
    <li></li>
    <li></li> // vai selecionar esse se estiver 2 no nth-of-type
    <li></li>
</ul>

''css     
ul li:nth-of-type(2) {
    font-weight: bold;
    color: red;
}
'''