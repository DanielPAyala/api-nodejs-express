const db = require('../database/conexion.js');

class ProfesoresController {
  constructor() {}

  consulta(req, res) {
    try {
      db.query(
        `SELECT * FROM profesores
        `,
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (result) {
            res.status(200).json(result);
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `SELECT * FROM profesores
        WHERE id = ?`,
        [id],
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (result) {
            res.status(200).json(result[0]);
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;
      db.query(
        `INSERT INTO profesores
        (id, dni, nombre, apellido, email, profesion, telefono)
        VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
        [dni, nombre, apellido, email, profesion, telefono],
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (result?.insertId) {
            res.status(201).json({ id: result.insertId });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  actualizar(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;
      db.query(
        `UPDATE profesores
        SET dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=?
        WHERE id=?;`,
        [dni, nombre, apellido, email, profesion, telefono, id],
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (result?.affectedRows == 1) {
            res
              .status(200)
              .json({ respuesta: 'Registro actualizado con éxito' });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  eliminar(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `DELETE FROM profesores
        WHERE id=?;`,
        [id],
        (err, result) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (result?.affectedRows == 1) {
            res.status(200).json({ respuesta: 'Registro eliminado con éxito' });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new ProfesoresController();
