const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController.js');

router.get('/', profesoresController.consulta);

router.post('/', profesoresController.ingresar);

router
  .route('/:id')
  .get(profesoresController.consultarDetalle)
  .put(profesoresController.actualizar)
  .delete(profesoresController.eliminar);

module.exports = router;
