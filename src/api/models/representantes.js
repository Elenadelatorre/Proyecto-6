const mongoose = require("mongoose");

const representanteSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: "representantes"
  }
);

const Representante = mongoose.model("representantes", representanteSchema, "representantes");
module.exports = Representante;