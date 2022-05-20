
## Selecionando elementos com pseudo-classes

* :nth-child()

mesma coisa da aula passada soq agr ele literalmente pega todos os filhos

<ul>
    <h3></h3>  
    <li></li> // vai selecionar esse se estiver 2 no :nth-child()
    <li></li> 
    <li></li>
</ul>

''css     
ul li:nth-child(2) {
    font-weight: bold;
    color: red;
}
'''

a regra serve tbm para cores como foi visto no :first-child