const { getRepresentantes, postRepresentante } = require("../controllers/representantes.js");

const representantesRoutes = require("express").Router();

representantesRoutes.get("/", getRepresentantes);
representantesRoutes.post("/", postRepresentante);

module.exports = representantesRoutes;