'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/curso_mean2', { useMongoClient: true }, (err, res) => {
mongoose.connect('mongodb://admin:admin@ds119650.mlab.com:19650/musify', { useMongoClient: true }, (err, res) => {
    if (err) {
        throw err;
    }
    else {
        console.log("La conexión a la base de datos está funcionando correctamente...");

        app.listen(port, function () {
            console.log("Servidor del api rest de musica escuchando en http://localhost:" + port);
        });
    }
});