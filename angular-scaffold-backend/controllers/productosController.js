var producto = require('../schemas/producto');

exports.getProductos = {
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}

exports.createProducto = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var newProducto = new producto({
      nombre: request.payload.nombre,
      descripcion: request.payload.descripcion,
      ingredientes: request.payload.ingredientes
    });
    newProducto.save();
    console.log('producto saved');
    return reply('ok');
  }
}
