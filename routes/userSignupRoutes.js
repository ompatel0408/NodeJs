const UserSignupController1 = require('../controller/UserSignupController')

const express = require('express');
const routes = express.Router();

routes.post('/signup', UserSignupController1.SignUp);

routes.post('/login', UserSignupController1.Login);

module.exports = routes;

