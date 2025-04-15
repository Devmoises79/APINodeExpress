import express from "express"; // importa o express

const app = express(); // cria o servidor
const PORTA = 3000; // porta do servidor
const arrResposta = [{name: "Moisés", company: "Enterprise"}, {name: "Peter", company: "Enterprise"}] // array de respostas

app.get('/', (req, res) => {
    res.json(arrResposta)
}) // rota raiz

app.listen(PORTA, () => {console.log(`Servidor rodando na porta ${PORTA}`);}) // inicia o servidor




