const express=require('express');
const departmentController1=require('../controller/DepartmentController');
const routes = express.Router();

routes.post('/department',departmentController1.createDepartment)
routes.put('/department/:id',departmentController1.updateEmployees)
module.exports=routes;