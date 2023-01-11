const express = require('express');
const EmployeeController = require('../controller/EmployeeController');
const routes = express.Router();

routes.post('/Employee',EmployeeController.createEmployee)
routes.get('/Employee',EmployeeController.getAllEmployees)
routes.get('/Employee1',EmployeeController.getAllEmployeeWithPopulate)
module.exports = routes;
