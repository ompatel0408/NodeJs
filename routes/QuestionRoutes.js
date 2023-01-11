const QuestionController = require('../controller/QuestionController');
const express = require('express');
const routes = express.Router();

routes.post('/questions', QuestionController.createQuestions);

module.exports = routes;