const app = require('./app');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

require('dotenv').config({path:'variables.env'});

//conexão BD
mongoose.connect(process.env.DATABASE, {useNewUrlParser : true, useUnifiedTopoLogy : true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.error("ERROR:  " +error.message);
})

app.set('port',process.env.PORT || 7777);
const server = app.listen(app.get('port'),() => {
    console.log("servidor rodando porta:"+server.address().port);
}); 