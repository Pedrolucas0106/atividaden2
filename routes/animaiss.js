const express = require('express');
const Animal = require('../models/Animal');
const router = express.Router();

// Rota para listar todos os animais
router.get('/animais', async (req, res) => {
    try {
        const animais = await Animal.find();
        res.render('animais', { animais });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar os animais');
    }
});

// Rota para adicionar um novo animal
router.post('/animais/adicionar', async (req, res) => {
    const novoAnimal = new Animal({
        nome: req.body.nome,
        especie: req.body.especie,
        descricao: req.body.descricao,
        imagem: req.body.imagem
    });

    try {
        await novoAnimal.save();
        res.redirect('/animais');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar o animal');
    }
});

module.exports = router;
