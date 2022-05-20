## Atributos

* :disabled  // só desabilita tipo um input, e a gente pode meio que deixar ele selecionado sem podermos clicar nele

'''HTML
<input type="text" disabled>
'''

'''CSS

input:disabled {
  border-color: blue;
  outline: none;
}
'''

* :required // faz ser obrigatorio o preenchimento desse input, e aquele que tiver required no input podemos mudar o seu CSS

'''HTML
<input type="text" required>
'''

'''CSS

input:required {
  background-color: red;
}
'''