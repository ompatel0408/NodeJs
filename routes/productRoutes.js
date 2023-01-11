const productController=require('../controller/productController');
const express = require('express');
const routes =express.Router();

routes.post('/product',productController.createProducts);

module.exports=routes;