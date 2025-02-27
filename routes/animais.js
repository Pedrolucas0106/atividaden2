const express = require('express');
const router = express.Router();

// Rotas para cada categoria
router.get('/mamiferos', (req, res) => {
    res.render('mamiferos');
});

router.get('/repteis', (req, res) => {
    res.render('repteis');
});

router.get('/aves', (req, res) => {
    res.render('aves');
});

router.get('/anfibios', (req, res) => {
    res.render('anfibios');
});

router.get('/peixes', (req, res) => {
    res.render('peixes');
});

module.exports = router;
