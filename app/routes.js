const express = require('express');
const router = express.Router();
const EspacoController = require('./controllers/EspacoController');
const ReservaController = require('./controllers/ReservaController');
// ... (adicione rotas para UsuarioController se necessário)

// Rotas para Espaco
router.get('/espacos', EspacoController.index);
// router.get('/espacos/novo', EspacoController.novo);
// router.post('/espacos', EspacoController.criar);
// ... (outras rotas para Espaco)

// Rotas para Reserva
// router.get('/reservas', ReservaController.index);
// router.get('/reservas/novo', ReservaController.novo);
// router.post('/reservas', ReservaController.criar);
// ... (outras rotas para Reserva)

module.exports = router;
