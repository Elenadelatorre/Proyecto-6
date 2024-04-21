const Realmadrid = require("../models/realmadrid");

//! GET todos los documentos:
const getPlayers = async (req,res,next) => {
  try{
    const allPlayers = await Realmadrid.find().populate("representante");
    return res.status(200).json(allPlayers);
  } catch(error){
    console.log(error);
    return res.status(400).json("Ha fallado la petición");
  };
};

//! GET un documento por su ID:
const getPlayerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await Realmadrid.findById(id);
    return res.status(200).json(player);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Ha fallado la petición");
  }
};  

//! POST un nuevo documento:
const postPlayer = async (req, res, next) => {
  try {
    const newPlayer = new Realmadrid(req.body);
    const playerSaved = await newPlayer.save();
    return res.status(201).json(playerSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Ha fallado la petición");
  }
};


//! UPDATE un documento por su ID:

const updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPlayer = new Realmadrid(req.body);
    newPlayer._id=id;
    const playerUpdate = await Realmadrid.findByIdAndUpdate(id, newPlayer, { new: true });
    return res.status(200).json(playerUpdate);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Ha fallado la petición");
  }
};

//! DELETE un documento por su ID:
const deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const playerDeleted = await Realmadrid.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Elemento eliminado', elemento: playerDeleted });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Ha fallado la petición");
  }
};

module.exports = {
  getPlayers,
  getPlayerById,
  postPlayer,
  updatePlayer,
  deletePlayer
};