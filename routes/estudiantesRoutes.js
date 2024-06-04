const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');

/**
 * @swagger
 * /estudiantes:
 *   get:
 *     summary: Obtener todos los estudiantes
 *     tags: [Estudiante]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   dni:
 *                     type: string
 *                     example: "12345678"
 *                   nombre:
 *                     type: string
 *                     example: "Carlos"
 *                   apellido:
 *                     type: string
 *                     example: "Ayala"
 *                   email:
 *                     type: string
 *                     example: "carlos.ayala@gmail.com"
 *                   createdAt:
 *                     type: date-time
 *                     example: "2024-06-02T22:22:31.515Z"
 *                   updatedAt:
 *                     type: date-time
 *                     example: "2024-06-02T22:22:31.515Z"
 */
router.get('/', estudiantesController.consulta);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     tags: [Estudiante]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dni
 *               - nombre
 *               - apellido
 *               - email
 *             properties:
 *                 dni:
 *                   type: string
 *                   example: "12345678"
 *                 nombre:
 *                   type: string
 *                   example: "Carlos"
 *                 apellido:
 *                   type: string
 *                   example: "Ayala"
 *                 email:
 *                   type: string
 *                   example: "carlos.ayala@gmail.com"
 *     responses:
 *       201:
 *         description: Estudiante creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 dni:
 *                   type: string
 *                   example: "12345678"
 *                 nombre:
 *                   type: string
 *                   example: "Carlos"
 *                 apellido:
 *                   type: string
 *                   example: "Ayala"
 *                 email:
 *                   type: string
 *                   example: "carlos.ayala@gmail.com"
 *                 createdAt:
 *                   type: date-time
 *                   example: "2024-06-02T22:22:31.515Z"
 *                 updatedAt:
 *                   type: date-time
 *                   example: "2024-06-02T22:22:31.515Z"
 *       400:
 *         description: Error de validación
 */
router.post('/', estudiantesController.ingresar);

router
  .route('/:id')
  /**
   * @swagger
   * /estudiantes/{id}:
   *   get:
   *     summary: Obtener un estudiante por ID
   *     tags: [Estudiante]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del estudiante
   *     responses:
   *       200:
   *         description: Estudiante encontrado
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   example: 1
   *                 dni:
   *                   type: string
   *                   example: "12345678"
   *                 nombre:
   *                   type: string
   *                   example: "Carlos"
   *                 apellido:
   *                   type: string
   *                   example: "Ayala"
   *                 email:
   *                   type: string
   *                   example: "carlos.ayala@gmail.com"
   *                 createdAt:
   *                   type: date-time
   *                   example: "2024-06-02T22:22:31.515Z"
   *                 updatedAt:
   *                   type: date-time
   *                   example: "2024-06-02T22:22:31.515Z"
   *       404:
   *         description: Item no encontrado
   */
  .get(estudiantesController.consultarDetalle)
  /**
   * @swagger
   * /items:
   *   put:
   *     summary: Actualizar un estudiante por ID
   *     tags: [Estudiante]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del estudiante
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - dni
   *               - nombre
   *               - apellido
   *               - email
   *             properties:
   *                 dni:
   *                   type: string
   *                   example: "12345678"
   *                 nombre:
   *                   type: string
   *                   example: "Carlos"
   *                 apellido:
   *                   type: string
   *                   example: "Ayala"
   *                 email:
   *                   type: string
   *                   example: "carlos.ayala@gmail.com"
   *     responses:
   *       200:
   *         description: Estudiante creado
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   example: 1
   *                 dni:
   *                   type: string
   *                   example: "12345678"
   *                 nombre:
   *                   type: string
   *                   example: "Carlos"
   *                 apellido:
   *                   type: string
   *                   example: "Ayala"
   *                 email:
   *                   type: string
   *                   example: "carlos.ayala@gmail.com"
   *                 createdAt:
   *                   type: date-time
   *                   example: "2024-06-02T22:22:31.515Z"
   *                 updatedAt:
   *                   type: date-time
   *                   example: "2024-06-02T22:22:31.515Z"
   *       400:
   *         description: Error de validación
   *       404:
   *         description: Estudiante no encontrado
   */
  .put(estudiantesController.actualizar)
  /**
   * @swagger
   * /items/{id}:
   *   delete:
   *     summary: Eliminar un estudiante por ID
   *     tags: [Estudiante]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del estudiante
   *     responses:
   *       200:
   *         description: Estudiante eliminado
   *       404:
   *         description: Estudiante no encontrado
   */
  .delete(estudiantesController.eliminar);

module.exports = router;
