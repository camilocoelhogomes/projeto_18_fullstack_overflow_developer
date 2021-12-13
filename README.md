<h1 align="center">
     💻 <a href="#" alt="FullStack Overflor api"> FullStack Overflor </a>
</h1>

<h3 align="center">
  Poste suas duvidas à comunidade, verifique por dúvidas não respondidas, e verifique se algém respondeu sua dúvida
</h3>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

<h2> API em Produção: <a href='https://projeto-18-fullstack-overflow.herokuapp.com/'>https://projeto-18-fullstack-overflow.herokuapp.com/</a> </h2>

---

<h1> Tabela de conteúdos </h1>

<!--ts-->
- [💻 Sobre o projeto](#-sobre-o-projeto)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [🚀 Como executar o projeto Localmente](#-como-executar-o-projeto-localmente)
  - [Pré-requisitos](#pré-requisitos)
- [🛠 Tecnologias](#-tecnologias)
    - [**Server** (NodeJS)](#server-nodejs)
- [End Points](#end-points)
  - [➡️ **GET** para a rota **/is-live**](#️-get-para-a-rota-is-live)
  - [➡️ **POST** para a rota **/users**](#️-post-para-a-rota-users)
  - [➡️ **POST** para a rota **/questions**](#️-post-para-a-rota-questions)
  - [➡️ **GET** para a rota **/questions**](#️-get-para-a-rota-questions)
  - [➡️ **POST** para a rota **/questions/:questionId**](#️-post-para-a-rota-questionsquestionid)
  - [➡️ **GET** para a rota **/questions/:questionId**](#️-get-para-a-rota-questionsquestionid)
- [🦸 Autor](#-autor)
<!--te-->

---

## 💻 Sobre o projeto

💻  Full stack overflow é uma api para alunos postarem suas dúvidas e que qualquer pessoa pode solicitar as questões não respondidas e responder a essas dúvidas

---

## ⚙️ Funcionalidades

- [x] Criar uma dúvida
- [x] Ver a resposta da dúvida criada
- [x] Pegar as perguntas não respondidas
- [x] Responder à uma pergunta
- [x] Cadastrar usuários para responder as perguntas


---

## 🚀 Como executar o projeto Localmente

Este projeto conta apenas com o back-end da api


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h4> 🎲 Rodando o Backend (servidor)</h4>

```bash

# Clone este repositório
$ git clone https://github.com/camilocoelhogomes/projeto_18_fullstack_overflow_developer.git

# Acesse a pasta do projeto no terminal/cmd
$ cd [projeto_17_api_sing_me_a_song_back_end](https://github.com/camilocoelhogomes/projeto_18_fullstack_overflow_developer.git)

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

> Veja o arquivo [package.json](https://github.com/camilocoelhogomes/projeto_18_fullstack_overflow_developer/blob/main/package.json)

> Veja o arquivo [.env.exemple](https://github.com/camilocoelhogomes/projeto_18_fullstack_overflow_developer/blob/main/.env.example)

---
## End Points

### ➡️ **GET** para a rota **/is-live**

Retorna I'm alive para verificar se o servidor está no ar

### ➡️ **POST** para a rota **/users**

Deve ser enviado um Json com o formato

```Json
{
  "name": "String contendo o Nome do usuário",
  "class": "String contendo a turma do usuário"
}
```

E receberá de volta um token de usuário, que será utilizado posteriormente para responder à perguntas

```Json
{
 "token": "Token no formato JWT"
}
```

### ➡️ **POST** para a rota **/questions**

Deve ser enviado um objeto no formato: 
```Json
{
  "question": "Uma string contendo a pergunta",
  "student": "Uma string contendo o nome do aluno ",
  "class": "Uma string contendo o nome da turma ",
  "tags": "Uma string contendo algumas tags de indentificação da área da pergunta ",
}
```

Receberá de volta um Objeto identificador da pergunta que será utilizado mais tarde para saber se a pergunta foi respondida ou não
```Json
{
  "id": "id no formato UUID"
}
```
### ➡️ **GET** para a rota **/questions**

Recebe de volta todas as perguntas nã respondidas em um array de objetos

```Json
[
  {
    "id":"id no formato UUID",
    "question": "Uma string contendo a pergunta",
    "student": "Uma string contendo o nome do aluno ",
    "class": "Uma string contendo o nome da turma ",
    "tags": "Uma string contendo algumas tags de indentificação da área da pergunta ",
    "isAnswer":"false"
  }
]
```

### ➡️ **POST** para a rota **/questions/:questionId**

- Essa rota é utilizada para responder à alguma questão
  - [x] questionId = id da questão a ser respondida

- Deve passar junto a rota um header authorization do tipo Bearer Token contendo o token do usuário recebido pelo mesmo quando criou o usuário na rota users

O body da requisição deve ser no formato

```Json
{
  "answer": "String contendo a resposta da questão",
}
```

### ➡️ **GET** para a rota **/questions/:questionId**

- Essa rota é utilizada para obter informações de questões específicas
  - [x] questionId = id da questão a ser respondida
  
Ela poderá ter duas respostas diferentes uma quando a questão ainda não foi respondida, e outra caso a questão já tenha sido respondida

- Questão não respondida

```Json
{
  "submitAt":"Informação no formato datetime indicando quando a questão foi criada",
  "question": "Uma string contendo a pergunta",
  "student": "Uma string contendo o nome do aluno ",
  "class": "Uma string contendo o nome da turma ",
  "tags": "Uma string contendo algumas tags de indentificação da área da pergunta ",
  "isAwnser":"Boolano indicando false, já que a questão não foi respondida"
}
```

- Questão respondida

```Json
{
  "submitAt":"Informação no formato datetime indicando quando a questão foi criada",
  "question": "Uma string contendo a pergunta",
  "student": "Uma string contendo o nome do aluno ",
  "class": "Uma string contendo o nome da turma ",
  "tags": "Uma string contendo algumas tags de indentificação da área da pergunta ",
  "isAwnser":"Boolano indicando false, já que a questão não foi respondida",
  "answeredAt": "Informação no formato datetime indicando quando a questão foi respondida",
  "answeredBy": "O nome da pessoa que respondeu a pergunta",
  "answer": "A resposta da pergunta em si",
}
```

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
