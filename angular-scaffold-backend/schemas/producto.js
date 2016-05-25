var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
  nombre : String,
  descripcion : String,
  ingredientes : []
});

module.exports = mongoose.model('Producto', ProductoSchema);
