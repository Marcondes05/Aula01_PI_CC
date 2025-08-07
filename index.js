const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

//Rota com parâmetro na URL
app.get('/hello/:nome', (req, res) => {
    const nome = req.params.nome
    res.json({message: `Hello ${nome}!`})
})

//Rota com parâmetros na query string
app.get('/pesquisa', (req, res) => {
    const nome = req.query.nome
    const sobrenome = req.query.sobrenome
    const mensagem = `${nome} ${sobrenome}`
    res.json({message: `Hello ${mensagem}`})
    //exemplo de rota 
    //http://localhost:3000/pesquisa?nome=Marcondes&sobrenome=Neto

})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port} `)
})