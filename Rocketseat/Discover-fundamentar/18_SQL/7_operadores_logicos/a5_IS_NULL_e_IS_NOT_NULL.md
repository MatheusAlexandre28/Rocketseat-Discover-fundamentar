Mostra os funcionarios q nao possuem id

SELECT * FROM funcionarios WHERE id_departamento IS NULL

e o contrario q mostra todos menos os q nao possuem id é IS NOT NULL

SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL