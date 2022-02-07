const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => {
    console.log('Servidor levantado');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/DH-Heroes/views/index.html'));
});