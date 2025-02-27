const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Importando os roteadores
const indexRouter = require('./routes/index');
const anfibiosRouter = require('./routes/anfibios');
const mamiferosRouter = require('./routes/mamiferos');
const repteiRouter = require('./routes/repteis');
const peixesRouter = require('./routes/peixes');
const avesRouter = require('./routes/aves');

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://pedropereira62:Lucas1967.@cluster0.kfq9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Definir o modelo de Animal
const animalSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    descricao: String,
    habitat: String,
    imagem: String
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const Animal = mongoose.model('Animal', animalSchema);

// Middleware para processar JSON nas requisições
app.use(express.json());

// Usando os roteadores para cada tipo de animal
app.use('/', indexRouter);
app.use('/mamiferos', mamiferosRouter);
app.use('/repteis', repteiRouter);
app.use('/anfibios', anfibiosRouter);
app.use('/peixes', peixesRouter);
app.use('/aves', avesRouter);

// Rota para criar um leão automaticamente
app.get('/criar-leao', async (req, res) => {
    const leao = new Animal({
        nome: 'Leão',
        tipo: 'Mamífero',
        descricao: 'O leão é um animal carnívoro, conhecido por sua força e liderança na savana.',
        habitat: 'Savanas e florestas abertas',
        imagem: 'Leao.jpg'
    });

    try {
        await leao.save();
        res.status(201).send('Leão criado com sucesso!');
    } catch (err) {
        res.status(500).send('Erro ao salvar o leão: ' + err.message);
    }
});

// Inicializar servidor
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
