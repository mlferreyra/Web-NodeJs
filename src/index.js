const express = require('express');
const path = require('path');
// la constante app nos sirve para crear un servidor (app es un servidor)
const app = express();

//Definimos un nombre de variable 'port' y le asigno un valor
app.set('port', 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//static files
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use(require('./routes/index.js'));


//con get obtengo el valor de la variable
app.listen(app.get('port'), () =>{
    console.log('Server on port ', app.get('port'));
})