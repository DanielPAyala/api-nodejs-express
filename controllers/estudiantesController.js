const db = require('../database/conexion.js');

class EstudiantesController {
  constructor() {}

  consulta(req, res) {
    res.json({ msg: 'Consulta estudiantes desde clase' });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: `Consulta de un estudiante con id ${id}` });
  }

  ingresar(req, res) {
    res.json({ msg: 'Ingreso de estudiante' });
  }

  actualizar(req, res) {
    res.json({ msg: 'Actualizar estudiante' });
  }

  eliminar(req, res) {
    res.json({ msg: 'Eliminar estudiante' });
  }
}

module.exports = new EstudiantesController();
