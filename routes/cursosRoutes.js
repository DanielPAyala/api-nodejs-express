const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController.js');

router.get('/', cursosController.consulta);

router.post('/', cursosController.ingresar);
router.post('/registroEstudiante', cursosController.asociarEstudiante);

router
  .route('/:id')
  .get(cursosController.consultarDetalle)
  .put(cursosController.actualizar)
  .delete(cursosController.eliminar);

module.exports = router;
