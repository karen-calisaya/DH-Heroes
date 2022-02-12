const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static('DH-Heroes/public/img'));

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}
    http://localhost:${PORT}/home`);
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/DH-Heroes/views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, '/DH-Heroes/views/babbage.html'))
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './DH-Heroes/views/berners-lee.html'))
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './DH-Heroes/views/clarke.html'));
})

app.get('/hamilton', (req, res) => { 
    res.sendFile(path.join(__dirname, './DH-Heroes/views/hamilton.html'));
})

app.get('/hopper', (req, res) => { 
    res.sendFile(path.join(__dirname, './DH-Heroes/views/hopper.html'));
})

app.get('/lovelace', (req, res) => { 
    res.sendFile(path.join(__dirname, './DH-Heroes/views/lovelace.html'));
})

app.get('/turing', (req, res) => { 
    res.sendFile(path.join(__dirname, './DH-Heroes/views/turing.html'));
})





/*path es un modulo nativo de node que contiene utilidades para manejar
y transformar las rutas de los directorios y archivos a formato de 
cadena. El sistema de archivos no es consultado para comprobar si los caminos son validos.
__dirname es una variable que me indica la ubicacion en la cual me encuentro
Puedo usar resolve(), que es un metodo tambien que me permite tener la ruta absoluta de mi archivo.
*/