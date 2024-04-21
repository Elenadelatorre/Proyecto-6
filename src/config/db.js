const mongoose = require('mongoose');

// Crear una función asíncrona:
const connectRM = async () => {
  try {
    await mongoose.connect(process.env.RM_URL);
    console.log('Conectado con éxito a la BBDD');
  } catch (error) {
    console.log('Error en la conexión de la BBDD');
  }
};

// Exportar la función para poder usarla en el index.js:
module.exports = { connectRM };
