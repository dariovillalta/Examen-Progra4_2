var ingrediente = require('../schemas/ingrediente');

exports.getIngredientes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var ingredientes = ingrediente.find({});
    reply(ingredientes);
  }
}

exports.createIngrediente = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newIngrediente = new ingrediente({
      nombre: request.payload.nombre,
      descripcion: request.payload.descripcion
    });
    newIngrediente.save();
    console.log('ingrediente saved');
    return reply('ok');
  }
}
