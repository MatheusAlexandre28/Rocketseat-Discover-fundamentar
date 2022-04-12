# comentarios

* nao ira afetar o seu codigo
* ajuda a lembrar blocos de codigos
* deixa dicas para leitura
* ajuda outros a entenderem
* nunca esqueça de fechar um comentario aberto

comentarios começam com '/*' e terminam com '*/'

'''css

/* Basico */
/* ------------------------ */
body {
    font: 1em/150% helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max width: 33em;
}

@media (min-width: 70em) {
    /* Let's special case the global font size. On large screen or window, we increase the font size for better readability */
    body {
        font-size:130%
    }
}

h1 {font-size: 1.5em;}

/* Elementos especificos */
/* ------------------------------ */
div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p {
    margin: 0;
    padding: 1em;
}
'''

* voce podera usar para desabilitar partes do codigo

'''css

/*.special {
    color: red;
}*/

p {
    color: blue;
}
'''