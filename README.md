<h1 align="center">
     💻 <a href="#" alt="FullStack Overflor api"> FullStack Overflor </a>
</h1>

<h3 align="center">
  Poste suas duvidas à comunidade, verifique por dúvidas não respondidas, e verifique se algém respondeu sua dúvida
</h3>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

<h2> API em Produção: https://projeto-17-api-sing-me-a-song.herokuapp.com/ </h2>

---

<h1> Tabela de conteúdos </h1>

<!--ts-->
- [💻 Sobre o projeto](#-sobre-o-projeto)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [🚀 Como executar o projeto Localmente](#-como-executar-o-projeto-localmente)
  - [Pré-requisitos](#pré-requisitos)
    - [🎲 Rodando o Backend (servidor)](#-rodando-o-backend-servidor)
- [🛠 Tecnologias](#-tecnologias)
    - [**Server** (NodeJS)](#server-nodejs)
- [End Points](#end-points)
  - [➡️ **GET** para a rota **/is-live**](#️-get-para-a-rota-is-live)
  - [➡️ **GET** para a rota **/recommendations/random**](#️-get-para-a-rota-recommendationsrandom)
  - [➡️ **GET** para a rota **/recommendations/top/:amount**](#️-get-para-a-rota-recommendationstopamount)
  - [➡️ **POST** para a rota **/recommendations**](#️-post-para-a-rota-recommendations)
  - [➡️ **POST** para a rota **/recommendations/:id/:voteType**](#️-post-para-a-rota-recommendationsidvotetype)
- [🦸 Autor](#-autor)
<!--te-->

## 💻 Sobre o projeto

🎶 Sing me a Song é um projeto onde pessoas solicitam recomendações de musicas aleatórias e pai responde com uma recomendação de seu banco de dados


## ⚙️ Funcionalidades

- [x] Criar uma recomendação

  - [x] O link do youtube de uma música
  - [x] O nome da Música

- [x] Receber as top recomendações
  - [x] receba as musicas mais ouvidas pela galera!


- [x] Votar em uma recomendação
  - [x] aumentar a nota da recomendação por um com um upVote ou reduzir a nota por um com um downVote


---

## 🚀 Como executar o projeto Localmente

|Este projeto conta apenas com o back-end da api


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/camilocoelhogomes/projeto_17_api_sing_me_a_song_back_end.git

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto_17_api_sing_me_a_song_back_end

# Instale as dependências
$ npm install

# crie o banco de dados a partir do arquivo dbConfig.sql e coloque as variavies de ambiente conforme o .env.example e crie um arquivo .env.dev baseado nele

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O server iniciará na porta configurada em sua variavel de ambiente do .env.test
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([NodeJS](https://nodejs.org/en/))
- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Postgress](https://github.com/postgres/postgres)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Joi](https://github.com/hapijs/joi)**
- **[Jest](https://github.com/facebook/jest)**

> Veja o arquivo [package.json](https://github.com/camilocoelhogomes/projeto_17_api_sing_me_a_song_back_end/blob/main/package.json)

---
## End Points

### ➡️ **GET** para a rota **/is-live**

Retorna ok para verificar se o servidor está no ar

### ➡️ **GET** para a rota **/recommendations/random**

Retorna uma recomendação de Música aleatória no formato

```Json
{
  "id": 1,
  "name": "Alexandre Pires - Pot-Pourri: Samba Diferente/ Dança da Vassoura",
  "youtubeLink": "https://www.youtube.com/watch?v=RE0_a03BXRI&ab_channel=AlexandrePires",
  "score": 245
},
```

### ➡️ **GET** para a rota **/recommendations/top/:amount**

Retorna uma quantidade de recomendações igual ao valor de amount passado, o valor de amount deve ser um número
```Json
[
{
  "id": 1,
  "name": "Alexandre Pires - Pot-Pourri: Samba Diferente/ Dança da Vassoura",
  "youtubeLink": "https://www.youtube.com/watch?v=RE0_a03BXRI&ab_channel=AlexandrePires",
  "score": 245
},
{
  "id": 2,
  "name": "Só Pra Contrariar - Você Virou Saudade (Ao Vivo)",
  "youtubeLink": "https://www.youtube.com/watch?v=JLs7pW9fUZo&ab_channel=SoPraContrariarVEVO",
  "score": 243
},
. . .
]
```

### ➡️ **POST** para a rota **/recommendations**

Envie um objejo com o formato abaixo para esse end poit para criar uma recomendação

```Json
{
  "name": "Alexandre Pires - Pot-Pourri: Samba Diferente/ Dança da Vassoura",
  "youtubeLink": "https://www.youtube.com/watch?v=RE0_a03BXRI&ab_channel=AlexandrePires"
},
```

### ➡️ **POST** para a rota **/recommendations/:id/:voteType**

Deve ser passado na query da recomendação o id da recomendação.

- [x] id = id de uma música
- [x] voteType = "upvote" para adicionar 1 || "downvote" para remover 1

---
## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/43358210?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Camilo Coelho Gomes</b></sub></a> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/camilocoelhogomes/)
[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/camilocoelhogomes/)

Feito com ❤️ por Camilo Coelho [Entre em contato!](https://www.linkedin.com/in/camilocoelhogomes/)

---
