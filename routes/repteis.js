const express = require('express');
const router = express.Router();

// Rota principal da categoria anfíbios
router.get('/', (req, res) => {
    res.render('repteis'); // Certifique-se que a visão 'anfibios' existe na pasta 'views'
});

module.exports = router;  // Garantir que o roteador esteja sendo exportado corretamente
