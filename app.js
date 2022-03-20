const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen(3000, () =>
    console.log("Servidor levantado en el puerto 3000")
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
})