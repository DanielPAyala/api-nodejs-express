const db = require('../database/conexion.js');

class CursosController {
  constructor() {}

  consulta(req, res) {
    res.json({ msg: 'Consulta cursos desde clase' });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: `Consulta de un curso con id ${id}` });
  }

  ingresar(req, res) {
    res.json({ msg: 'Ingreso de curso' });
  }

  actualizar(req, res) {
    res.json({ msg: 'Actualizar curso' });
  }

  eliminar(req, res) {
    res.json({ msg: 'Eliminar curso' });
  }
}

module.exports = new CursosController();
