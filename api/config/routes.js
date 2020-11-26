const express = require("express");
const router = express.Router();

const carro = require('../controllers/CarroController');

router.post('/carro/cadastrar', carro.cadastrar);
router.get('/carro/listar', carro.listar);

module.exports = router;