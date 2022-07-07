Podemos pegar entre numeros tbm por exemplo de 1 a 10 pegar os numeros entre 4 e 7

SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 and 7


# NOT BETWEEN

ou falarmos q queremos uma lista de todos os funcionarios menos os funcionarios q tenham o id entre 4 e 7

SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 and 7
