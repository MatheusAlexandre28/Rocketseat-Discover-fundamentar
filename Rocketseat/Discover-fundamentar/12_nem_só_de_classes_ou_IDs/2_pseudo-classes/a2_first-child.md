## Selecionando elementos com pseudo-classes

* :first-child

seleciona literalmente o primeiro filho dentro  de um bloco... ex

<ul>
    <h3></h3> // neste caso esse é o :first-child
    <li></li>
    <li></li>
    <li></li>
</ul>

'''css     dessa forma apenas ira pegar a font-weight
ul li:first-child {
    font-weight: bold;
    color: red;
}
'''

'''css     dessa forma funciona ambos
ul h3:first-child {
    font-weight: bold;
    color: red;
}