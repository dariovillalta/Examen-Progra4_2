var ingredientesController = require('./controllers/ingredientesController');
var productosController = require('./controllers/productosController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Students')}}},
	{method: 'GET', path: '/v1/ingredientes', config: ingredientesController.getIngredientes},
	{method: 'POST', path: '/v2/ingredientes', config: ingredientesController.createIngrediente},
	{method: 'GET', path: '/v1/productos', config: productosController.getProductos},
	{method: 'POST', path: '/v2/productos', config: productosController.createProducto},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
