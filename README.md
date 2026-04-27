# 🌐 APINodeExpress — API REST com Node.js e Express

## 📌 Visão Geral
Este projeto é uma API REST simples desenvolvida com Node.js e Express, com foco em fundamentos de backend e comunicação via HTTP. A aplicação expõe dados estruturados em JSON através de um servidor local.

---

## ⚙️ Funcionalidades
- Criação de servidor com Express
- Endpoint principal (`GET /`)
- Retorno de dados estruturados em JSON
- Estrutura simples de API REST
- Execução em ambiente local

---

## 🧠 Conceitos Aplicados
- Node.js (runtime JavaScript no backend)
- Express.js (framework web minimalista)
- Criação e manipulação de rotas HTTP
- API REST básica
- Comunicação cliente-servidor
- Resposta em formato JSON

---

## 📦 Estrutura do Projeto

```text
APINodeExpress/
│
├── api.js # Arquivo principal da API
├── package.json # Configuração e dependências do projeto
├── package-lock.json # Controle de versões das dependências
├── node_modules/ # Dependências instaladas
└── README.md # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Devmoises79/APINodeExpress
cd APINodeExpress
```

2. Instalar dependências

```bash
npm install
```

3. Iniciar o servidor

```bash
node api.js
```

4. Acessar a API

Abra no navegador ou utilize ferramentas como Postman/Insomnia:

```bash
http://localhost:3000/
```
--

```bash
📤 Exemplo de Resposta
[
  {
    "name": "Moisés",
    "company": "Enterprise"
  },
  {
    "name": "Peter",
    "company": "Enterprise"
  }
]
```

# 🎯 Objetivo Técnico

Este projeto tem como objetivo consolidar fundamentos essenciais de desenvolvimento backend com Node.js, incluindo criação de servidores HTTP, definição de rotas e retorno de dados em JSON.

# 📈 Possíveis Evoluções do Projeto

- Separação de rotas em módulos (arquitetura escalável)
- Implementação de padrão MVC
- Integração com banco de dados (MongoDB ou PostgreSQL)
- Validação de dados de entrada
- Middleware para logs e tratamento de erros
- Versionamento da API (/api/v1)
- Uso de variáveis de ambiente com dotenv

# 👨‍💻 Autor

Desenvolvido por Devmoises79
LinkedIn: https://www.linkedin.com/in/moises-aniceto-71042a251/
