## Projeto para avaliação da matéria Desafio Profissional VI

 

 Um sistema de gerenciamento de baralhos para o jogo de cartas Magic the Gathering. Utiliza a API do [Scryfall](https://scryfall.com/docs/api) para buscar e montar decks com base nas regras de formato Commander. Os decks são compostos por 1 comandante e 99 cartas seguindo as cores permitidas. Possui autenticação e autorização de usuários, suporte para múltiplos decks por usuário, cache para otimização de listagem e importação de decks via JSON com validação de regras. O sistema permite listagem de decks do usuário logado e acesso restrito para listar todos os decks. Testes de performance foram realizados para avaliar a eficiência do cache.


### Trabalho realizado por:

- André Fragalli Vassoler - RA: 22012716-2
- Diogo Tizolim Cedran - RA: 22014212-2
- Felipe Cesar Tomazoti de Souza - RA: 22019977-2

#
### Programas Necessário
#### MongoDB Compass: [Donwload](https://www.mongodb.com/try/download/compass)  

#### Postman: [Donwload](https://www.postman.com/downloads/)  


 

#
### Iniciando o projeto
#### Clone o repositírio na sua maquina: 
`$ git clone https://github.com/Felipe-Tomazoti/MTG.git`

![image](https://github.com/user-attachments/assets/44a823a6-ebcc-4ebe-b70f-300dba7567d1)


### Criando e Configurando o .env
Lembre-se de criar e preencher o arquivo .env da API conforme o exemplo abaixo.

![image](https://github.com/user-attachments/assets/4257fcbf-20d3-4897-95a9-16367a2219a0)


**ATENÇÃO**

Antes de rodar a aplicação, o usuário deve ser criado no MongoDB, conforme mostrado no exemplo abaixo.

![image](https://github.com/user-attachments/assets/5030ead0-6368-4540-8a86-eacf435ae3c7)


### Use o seguinte comando iniciar a API:
`npm start`

### Agora você já pode testar as rotas da API, faça o donwload das [Rotas](https://cdn.discordapp.com/attachments/1081547979065921650/1289689406944313406/MTG.postman_collection.json?ex=66f9bc5b&is=66f86adb&hm=d611cd0a6bce8d74bc3facbb103920650058f8dae45029a8c6aefc0835acf47e&)

No Postman click em importar:

![image](https://github.com/user-attachments/assets/1070ed3c-e98d-4df5-8a89-4ba268ca3c67)


Primeiro passo execute a rota para criar usuarios e logo em seguida utilize a rota de autenticação para gerar o token, com o token gerado você pode adicionalo nas demais requisições para o seu funcionamento.

 
  
 ###
   ___

 <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
