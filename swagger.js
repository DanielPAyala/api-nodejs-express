const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Rest',
      version: '1.0.0',
      description: 'API Rest con NodeJS + ExpressJS',
    },
  },
  apis: ['./routes/*.js'], // Rutas de tus archivos
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
