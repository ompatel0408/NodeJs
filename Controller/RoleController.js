const roleSchema = require('../Model/RolesSchema');

exports.createRole =((request, response) => {

    roleSchema.create(request.body,(error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while creating role",
            })
        }else{

            response.status(201).json({
                message:"Role created successfully",
                data:data,
        })
    }
    })
})