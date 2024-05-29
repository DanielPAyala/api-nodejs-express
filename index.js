const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

app.listen(3500, () => {
  console.log('Starting server...');
});
