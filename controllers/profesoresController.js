class ProfesoresController {
  constructor() {}

  consulta(req, res) {
    res.json({ msg: 'Consulta profesores desde clase' });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: `Consulta de un profesor con id ${id}` });
  }

  ingresar(req, res) {
    res.json({ msg: 'Ingreso de profesor' });
  }

  actualizar(req, res) {
    res.json({ msg: 'Actualizar profesor' });
  }

  eliminar(req, res) {
    res.json({ msg: 'Eliminar profesor' });
  }
}

module.exports = new ProfesoresController();
