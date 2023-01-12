const ExamController1 = require('../controller/ExamController');
const express = require('express');
const routes = express.Router();

routes.post('/exam',ExamController1.createExam)
routes.get('/exam',ExamController1.getExamList)
routes.get('/exam/:id',ExamController1.getExamById)

module.exports = routes;