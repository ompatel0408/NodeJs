const QuestionController1 = require('../controller/QuestionController');
const express = require('express');
const routes = express.Router();

routes.post('/questions', QuestionController1.createQuestions);

module.exports = routes;