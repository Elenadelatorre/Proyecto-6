require('dotenv').config();

const express = require('express');
const { connectRM } = require('./src/config/db');
const playerRoutes = require('./src/api/routes/realmadrid');
const representantesRoutes = require('./src/api/routes/representantes');

const app = express();
connectRM();

app.use(express.json());

app.use('/api/v1/players', playerRoutes);
app.use('/api/v1/representantes', representantesRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Routes not found');
});
app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000');
});
