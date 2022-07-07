SELECT * FROM aluno WHERE(a gente coloca o campo depois um sinal de igual o id) matricula = 1

SELECT * FROM aluno WHERE nome like(pega o inicio do nome por exemplo apenas pegar nomes q iniciam com 'j') "j%"(entre aspas por ser informação do tipo text, e a porcentagem diz q pode ser qualquer outros caracteres infinitamente)

podemos usar as porcentagens com %g% assim ele acha todos os text q contem esse caractere no meio

SELECT matricula, cpf FROM aluno WHERE nome like "%g%"