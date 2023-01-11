const ExamController = require('../controller/ExamController');
const express = require('express');
const routes = express.Router();

routes.post('/exam',ExamController.createExam)
routes.get('/exam',ExamController.getExamList)
routes.get('/exam/:id',ExamController.getExamById)

module.exports = routes;