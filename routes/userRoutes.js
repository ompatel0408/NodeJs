const userController = require('../Controller/userController')
const express = require('express')
const router= express.Router()

const zodMiddleware =require('../MiddleWare/ZodMiddleWare')
const userSchemaValidation =require('../Util/UserSchemaValidation') 

router.get("/user",userController.findAllRecords)
router.get("/user/:id",userController.getRecordsById)
router.post("/user",zodMiddleware.validate(userSchemaValidation),userController.createUser)
router.delete('/user/:id',userController.DeleteUsers)
router.put("/user/:id",userController.updateUser)
module.exports = router