const answerController1=require('../controller/answerController');
const express=require('express');
const routes=express.Router();

routes.post('/answer', answerController1.createAnswer);

module.exports=routes;
