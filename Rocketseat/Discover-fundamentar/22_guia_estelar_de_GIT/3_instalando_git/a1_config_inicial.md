# Configuração inicial

Essa configuração voce fara apenas uma vez por computador e o efeito se mantera após atualizações

Voce tambem pode muda-las em qualquer momento rodando esses comandos novamente.

Sua identidade
Assim que instalar o git, abra o terminal e digite

$ git config --global user.name "Seu nome completo Aqui Entre aspas"
$ git config -- global user.email seuemailaqui@dominio.com.br

 Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutavel nos commits que voce começa a criar:

 Se voce quiser substituir essa informação com nome diferente para um projeto especifico, voce pode rodar o comando sem a opção --global dentro daquele projeto.

 # Editor
 voce podera trocar o editor padrao, que é o vim, por outro

 git config --global core.editor "code -w"

 # Ver configurações
 voce podera verificar suas configurações com o comando abaixo

 git config --list

 # git config

 - Permite ver e atribuir variaveis de configuração como nome e email.
 - Estas variaveis podem ser armazenada em tres lugares diferentes:
  1. /etc/gitconfig: valido para todos os usuarios no sistema e todos os seus repositorios. Se voce passar a opção --system para git config, ele le e escreve neste arquivo.
  2 ~/.gitconfig ou ~/.config/git/config: Somente para o seu usuario. Voce pode fazer o Git ler e escrever neste arquivo passando a opção --global.
  3. config no diretorio Git (ou seja, .git/config) de qualquer repositorio que voce esteja usando: especifico para este repositório.

 Cada nivel sobrescreve os valores no nivel anterior, ou seja, valores em .git/config prevalecem sobre /etc/gitconfig.

 No Windows, o arquivo .gitconfig estara no diretorio $HOME que é C:|Users|$USER