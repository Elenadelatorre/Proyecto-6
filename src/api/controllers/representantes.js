const Representante = require('../models/representantes');

//! CREATE
const postRepresentante = async (req, res, next) => {
  try {
    const newRepresentante = new Representante(req.body);
    const representanteSaved = await newRepresentante.save();
    return res.status(201).json(representanteSaved);
  } catch (error) {
    return res.status(400).json('Error');
  }
};

//! READ
const getRepresentantes = async (req, res, next) => {
  try {
    const allRepresentantes = await Representante.find();
    return res.status(200).json(allRepresentantes);
  } catch (error) {
    return res.status(400).json('Error');
  }
};

module.exports = {
  postRepresentante,
  getRepresentantes
};
