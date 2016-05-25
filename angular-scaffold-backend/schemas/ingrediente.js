var mongoose = require('mongoose');

var IngredienteSchema = new mongoose.Schema({
  nombre : String,
  descripcion : String
});

module.exports = mongoose.model('Ingredientes', IngredienteSchema);
