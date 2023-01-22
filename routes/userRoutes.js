const userController1 = require('../controller/userController')
const express = require('express')
const routes= express.Router()

const zodMiddleware =require('../MiddleWare/ZodMiddleWare')
const userSchemaValidation =require('../Util/UserSchemaValidation') 

routes.get("/user",userController1.findAllRecords)
routes.get("/user/:id",userController1.getRecordsById)
routes.post("/user",zodMiddleware.validate(userSchemaValidation),userController1.createUser)
routes.delete('/user/:id',userController1.DeleteUsers)
routes.put("/user/:id",userController1.updateUser)
module.exports = routes