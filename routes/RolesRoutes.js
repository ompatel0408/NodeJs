const rolesController = require('../controller/RoleController');
const express = require('express');
const routes = express.Router();

routes.post('/roles',rolesController.createRole)

module.exports = routes;