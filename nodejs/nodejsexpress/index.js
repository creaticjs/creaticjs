const express = require('express');
const bodyParser = require('body-parser');
const dbusers = require('./db/db');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Servidor con Hola');
});
app.get('/usuario', (req, res) => {
    res.status(200).send({mensaje : "Todo bien sin ID"}); 
});
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    console.log(dbusers[id]);
    res.status(200).send(dbusers[id].name); 
});

app.post('/usuario', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    res.send(dbusers[id]);
});
app.listen(3000, () => {
    console.log(`El servidor esta corriendo en el puerto 3000`);
});
