const express = require('express');
const routes = require('./routes'); // Crie suas rotas

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static('public')); 

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
