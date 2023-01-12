const cartController1 = require('../controller/cartController');
const express = require('express');
const routes = express.Router();

routes.post('/cart', cartController1.addToCart);
routes.get('/cart', cartController1.getCart);
routes.get('/cart/:id', cartController1.getCartById);
routes.get('/cart1/:id', cartController1.getCartByProductId);

module.exports=routes;
