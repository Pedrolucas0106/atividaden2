const express = require('express');
const router = express.Router();

// Rota principal da categoria anfíbios
router.get('/', (req, res) => {
    // Alterando para renderizar uma visão relacionada aos anfíbios
    res.render('anfibios'); // Certifique-se de que o arquivo 'anfibios.ejs' está na pasta 'views'
});

module.exports = router;
