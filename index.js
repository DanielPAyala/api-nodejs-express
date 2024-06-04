const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');
const cursosRoutes = require('./routes/cursosRoutes.js');
const swaggerDocs = require('./swagger.js');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1><a href="/api-docs">API Docs</a></h1>');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);

swaggerDocs(app);

app.listen(3500, () => {
  console.log('Starting server...');
});
