const UserSignupController1 = require('../controller/UserSignupController')

const express = require('express');
const routes = express.Router();

routes.post('/signup', UserSignupController1.SignUp);
//login
routes.post('/login', UserSignupController1.Login);

module.exports = routes;


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
module.exports = routes;
*/

