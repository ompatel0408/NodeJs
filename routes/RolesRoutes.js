const rolesController1 = require('../controller/RoleController');
const express = require('express');
const routes = express.Router();

routes.post('/roles',rolesController1.createRole)

module.exports = routes;