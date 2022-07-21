# Tipos de Controle de Versão

Sistemas Locais

- Copiar os arquivos para outro diretorio
- Muito comum e muito simples
- Incrivelmente propensa a erros
- Facil de sobreescrever arquivos, caso haja feito uma copia errada

 -- Para superar os possiveis erros, existe o RCS - Revision Control System
- Ferramenta popular (antigamente) para controle de versão
- Mantem conjuntos de alterações, ou seja, as diferenças entre os arquivos
- Formato especial no disco;
- Re-criar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionando-se todas as alterações ao arquivo.

-- E se voce precisar colaborar com desenvolvedores em outros sistemas?

# Sistemas Centralizados
exemplo: CVS, Sbversion e Perforce

- Um unico servidor que contem todos os arquivos de controle de versão
- Varios clientes usam arquivos a partir desse lugar central.

Por muitos anos, este tem sido o padrao para controle de versão.

Vantagens sobre VCSs locais
- Controle sobre atividades dos colaboradores no projeto.
- Os administradores tem controle refinado sobre quem pode fazer o que;
- Mais facil de administrar um CVCS do que lidar com bancos de dados locais em cada cliente.

Desvantagens
- Se esse servidor der problema por uma hora, durante essa hora ninguem pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando. 
- Se o disco rigido do banco de dados central for corrompido, voce perde absolutamente tudo
- Sistemas VCS locais sofrem com esse mesmo problema

Sempre que voce tenha toda a historai do projeto em um unico lugar, há o risco de perder tudo.

# Sistemas Distribuidos
exemplo: Git, Mercurial, Bazaar ou Darcs

- Duplicar(clonar) localmente o repositorio completo.
- Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositorios do cliente podera ser copiado de volta para o servidor
- Cada clone é de fato um backup completo de todos os dados.
- Clientes usam o estado mais recente ds arquivos