const testController1 = require('../Controller/TestController1')
const express = require('express');
const routes = express.Router();

routes.get('/test1', testController1.getAllData)
routes.get('/test1/:id',testController1.getDataById)
routes.post('/test1', testController1.createData)
routes.delete('/test1/:id', testController1.deleteData)
routes.put('/test1/:id', testController1.updateData)
module.exports=routes