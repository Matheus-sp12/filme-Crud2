const express = require("express");

const teste = express();
const port = 3000;

const filmes = ['Vingadores', 'House of Dragons', 'Vikings', 'Star Wars'];


teste.get('/filmes/:index', (req, res) => {
    const { index } = req.params;
    return res.json(filmes[index]);
});


teste.get('/filmes', (req, res) => {
    return res.json(filmes);
});

teste.post('/filmes', (req, res) => {
    const { name } = req.body;

    filmes.push(name);
    return res.json(filmes);
});

teste.put('/filmes:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    filmes[index] = name;

    return res.json(filmes);
});


teste.delete('/filmes/:index', (req, res) => {
    const { index } = req.params;
    filmes.splice(index, 1 );
    return res.json({mensage: "O filme foi deletado!"});
});





teste.listen(3000, (error) => {
    if(error) {
        console.log("deu errado");
        return
    }
    console.log("Subiu show");
});