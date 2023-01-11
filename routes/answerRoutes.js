const answerController=require('../controller/answerController');
const express=require('express');
const routes=express.Router();

routes.post('/answer', answerController.createAnswer);

module.exports=routes;
