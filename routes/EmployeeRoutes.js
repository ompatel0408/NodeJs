const express = require('express');
const EmployeeController1 = require('../Controller/EmployeeController');
const routes = express.Router();

routes.post('/Employee',EmployeeController1.createEmployee)
routes.get('/Employee',EmployeeController1.getAllEmployees)
routes.get('/Employee1',EmployeeController1.getAllEmployeeWithPopulate)
module.exports = routes;
