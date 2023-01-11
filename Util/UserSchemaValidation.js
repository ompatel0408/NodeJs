const zod = require('zod');

const userSchemaValidation = zod.object({
    body: zod.object({
        FirstName:zod.string().min(3).max(30),
        LastName:zod.string().min(3).max(30),
        Email:zod.string().email(),
        Password:zod.string().min(8).max(32),
        age:zod.number().positive().int(),
        isActive:zod.boolean(),  
    }).strict()
})

module.exports =userSchemaValidation;