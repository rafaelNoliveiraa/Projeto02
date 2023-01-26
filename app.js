//fazendo a importação
const express= require("express")
const router = require('./routes/index');
const mustache = require("mustache-express");

// configuraçao basicas do aplicativo
const app = express();
app.use('/', router); //foi passado 1 rota posis criamos apenas 1

app.use(express.json());

app.engine("mst", mustache(__dirname + '/views/partials','.mst'));  //config o motor, extensao utilizada
app.set('view engine', 'mst');  // setar motor visual

// Pega o direotiro do projeto
app.set('views',__dirname + '/views');

module.exports = app; //  exportamos o app, pois vamos importalas no servidor
