Vamos instalar o JSON server q é um servidor q vai responder dados em formato JSON, vamos achar no github.com/typicode/json-server precisamos ter o node na nossa maquina, ent de um npm install -g json-server, e colocamos este codigo no novo diretorio
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}