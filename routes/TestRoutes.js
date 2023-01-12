const TestController1= require('../Controller/TestController')
const express = require('express')

const router = express.Router()
router.get('/Test',TestController1.Api)
const router1= express.Router()
router1.get('/Test1',TestController1.Api1)
// function sum(){
//     console.log("sum");
// }
// module.exports= {router,sum};

module.exports={router,router1};