const TestController= require('../Controller/TestController')
const express = require('express')

const router = express.Router()
router.get('/Test',TestController.Api)
const router1= express.Router()
router1.get('/Test1',TestController.Api1)
// function sum(){
//     console.log("sum");
// }
// module.exports= {router,sum};

module.exports={router,router1};