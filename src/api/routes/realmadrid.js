const {
  getPlayers,
  getPlayerById,
  postPlayer,
  updatePlayer,
  deletePlayer
} = require('../controllers/realmadrid');
const playerRoutes = require('express').Router();

playerRoutes.get('/:id', getPlayerById);
playerRoutes.get('/', getPlayers);
playerRoutes.post('/', postPlayer);
playerRoutes.put('/:id', updatePlayer);
playerRoutes.delete('/:id', deletePlayer);

module.exports = playerRoutes;
