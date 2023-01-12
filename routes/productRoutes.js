const productController1=require('../controller/productController');
const express = require('express');
const routes =express.Router();

routes.post('/product',productController1.createProducts);

module.exports=routes;