const examUserController = require('../controller/examUserController');
const express = require('express')
const routes= express.Router()



routes.post('/addExamUser', examUserController.addExamUser);
routes.get('/getExamUser', examUserController.getExamUser);
routes.get('/getExamUser/:id', examUserController.getExamUserById);
module.exports = routes;
