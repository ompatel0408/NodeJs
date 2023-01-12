const examUserController1 = require('../controller/examUserController');
const express = require('express')
const routes= express.Router()



routes.post('/addExamUser', examUserController1.addExamUser);
routes.get('/getExamUser', examUserController1.getExamUser);
routes.get('/getExamUser/:id', examUserController1.getExamUserById);
module.exports = routes;
