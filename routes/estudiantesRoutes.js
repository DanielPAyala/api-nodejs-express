const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');

router.get('/', estudiantesController.consulta);

router.post('/', estudiantesController.ingresar);

router
  .route('/:id')
  .get(estudiantesController.consultarDetalle)
  .put(estudiantesController.actualizar)
  .delete(estudiantesController.eliminar);

module.exports = router;
