const db = require('../database/conexion.js');

class EstudiantesController {
  constructor() {}

  consulta(req, res) {
    try {
      db.query(
        `SELECT * FROM estudiantes
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
        `SELECT * FROM estudiantes
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
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `INSERT INTO estudiantes
        (id, dni, nombre, apellido, email)
        VALUES(NULL, ?, ?, ?, ?);`,
        [dni, nombre, apellido, email],
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
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `UPDATE estudiantes
        SET dni=?, nombre=?, apellido=?, email=?
        WHERE id=?;`,
        [dni, nombre, apellido, email, id],
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
        `DELETE FROM estudiantes
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

module.exports = new EstudiantesController();
