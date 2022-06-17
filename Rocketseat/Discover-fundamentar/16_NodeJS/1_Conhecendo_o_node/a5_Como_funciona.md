# Como funciona?
Vamos ver o motivo do Node.JS ser tao rapido


Imagine...
Uma batalha entre 2 restaurantes...
Qual terá o melhor atendimento?

Restaurante do Tio Apache
- Diferencial: Cada cliente tem seu proprio garçon

- Um cliente vai fazer o pedido de uma pizza
    - Um garçon é direcionado até sua mesa
    - pega o pedido e leva até a cozinha, para o chef preparar
    - O chefe, por regra do restaurante, ira proibir e bloqueado o garçon de voltar para o cliente até que o pedido fique pronto
    - O cliente queria muito fazer mais pedidos, mas nao pode, pois o garçon esta bloquado
    - Após o pedido ficar pronto, o garçon leva de volta para o cliente
- O cliente foi embora e por regra do restaurante, o garçon é despedido

- Chegou 100 clientes numa noite
    - O gerente precisou contratar mais garçon...

    É um serviço caro e de primeira. Mas lento né? A regra de bloquear os garçons e ter que contratar um garçon para cada cliente, torna o serviço caro e lento.

Restaurante do Noderson
- Diferencial: O garçon de nome Eveneto Lupin

- Mesa 1: O cliente vai fazer o pedido de uma pizza
    - Evento Lupin pega o pedido e leva para o chef
    - volta com gosto de gás para a proxima mesa
- Mesa 2: O cliente faz o pedido de uma salada
    - Eveneto Lupin ja pegou o pedido e levou para o Chef
- O chef tocou um sininho avisando que o pedido da mesa 1 ja ficou pronto e Eveneto corre para pegar e fazer a entrega do pedido

    O segredo de Eveneto é que ele sabe trabalhar de maneira assincrona, fazendo mais de 1 evento de cada vez e não tem nada que o bloqueie. Ele é muito solicitado e faz seu trabalho muito bem feito.


Decifrando...
Tio apache