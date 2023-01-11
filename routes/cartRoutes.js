const cartController = require('../controller/cartController');
const express = require('express');
const routes = express.Router();

routes.post('/cart', cartController.addToCart);
routes.get('/cart', cartController.getCart);
routes.get('/cart/:id', cartController.getCartById);
routes.get('/cart1/:id', cartController.getCartByProductId);

module.exports=routes;
