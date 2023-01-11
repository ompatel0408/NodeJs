const express=require('express');
const departmentController=require('../controller/departmentController');
const routes = express.Router();

routes.post('/department',departmentController.createDepartment)
routes.put('/department/:id',departmentController.updateEmployees)
module.exports=routes;