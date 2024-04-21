const mongoose = require('mongoose');

const realmadridSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true, trim: true },
    edad: { type: Number, required: true },
    estatura: { type: Number },
    valorMercado: { type: Number, required: true },
    posición: [
      {
        type: String,
        enum: ['Portero', 'Defensa', 'Centrocampista', 'Delantero']
      }
    ],
    trayectoria: [
      {
        type: String,
        enum: [
          'Real Madrid',
          'Birmingham City',
          'Borussia Dortmund',
          'Chelsea',
          'Atlético de Madrid',
          'Tottenham Hotspur',
          'Dinamo Zagreb',
          'Flamengo',
          'Stade Rennais',
          'Olympique Lyonnais',
          'Manchester City',
          'Real Madrid Castilla',
          'Deportivo La Coruña',
          'Bayern Munich'
        ]
      }
    ],
    representante:{
      type:mongoose.Types.ObjectId,
      required: false,
      ref:"representantes"
    },
    imagenUrl: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Realmadrid = mongoose.model('realmadrid', realmadridSchema, 'realmadrid');

module.exports = Realmadrid;
