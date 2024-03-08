const express = require('express');
const app  = express();

app.use
(express.urlencoded(
    {
        extended: true
    }
    )
)

app.get('/', (req, res) => {
    res.send(`<form action='/' method="POST">
    Nome do cliente: <input name="AA" name="nome">
    <button>Enviar</button>
    </form>`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookProfile);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Seja bem vindo ${req.body.AA}`)
})

app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});