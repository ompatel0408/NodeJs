const userController1 = require('../controller/userController')
const express = require('express')
const router= express.Router()

const zodMiddleware =require('../MiddleWare/ZodMiddleWare')
const userSchemaValidation =require('../Util/UserSchemaValidation') 

router.get("/user",userController1.findAllRecords)
router.get("/user/:id",userController1.getRecordsById)
router.post("/user",zodMiddleware.validate(userSchemaValidation),userController1.createUser)
router.delete('/user/:id',userController1.DeleteUsers)
router.put("/user/:id",userController1.updateUser)
module.exports = router