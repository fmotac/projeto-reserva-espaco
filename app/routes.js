const express = require('express');
const router = express.Router();
const EspacoController = require('./controllers/EspacoController');
const ReservaController = require('./controllers/ReservaController');
const methodOverride = require('method-override');


// Configurar method-override para interpretar PUT e DELETE
router.use(methodOverride('_method'));


// Rotas para Espaco
router.get('/espacos', EspacoController.index);
router.get('/espacos/novo', EspacoController.novo);
router.post('/espacos', EspacoController.criar);
router.get('/espacos/:id/editar', EspacoController.editar);
router.put('/espacos/:id', EspacoController.atualizar); // Usando method-override
router.delete('/espacos/:id', EspacoController.excluir); // Usando method-override

// Rotas para Reserva
// router.get('/reservas', ReservaController.index);
// router.get('/reservas/novo', ReservaController.novo);
// router.post('/reservas', ReservaController.criar);
// ... (outras rotas para Reserva)

module.exports = router;
