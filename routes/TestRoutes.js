const TestController1= require('../controller/TestController')
const express = require('express')

const routes = express.Router()
routes.get('/Test',TestController1.Api)
routes.get('/Test1',TestController1.Api1)
module.exports=routes;