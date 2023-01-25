//fazendo a importação
const express= require("express")

//Rotas (quando o servidor for acessado, pra onde ele vai)
const router = express.Router();
router.get('/',(req,res) => res.send("Eu consegui..."));

// configuraçao basicas do aplicativo
const app = express();
app.use('/', router); //foi passado 1 rota posis criamos apenas 1

module.exports = app //  exportamos o app, pois vamos importalas no servidor
