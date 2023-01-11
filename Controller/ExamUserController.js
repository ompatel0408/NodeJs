const examUserSchema = require('../Model/examUserSchema');

exports.addExamUser = ((request, response) => {

    examUserSchema.create(request.body,(error,data)=>{

        if(error){

            response.status(500).json({
                message:"Error while creating user",
            })
        }else{

            response.status(201).json({
                message:"User created successfully",
                data:data,
            })
        }
    })
})

exports.getExamUser = ((request, response) => {

    examUserSchema.find().populate('exam').exec((error, data) => {

        if(error){
            
            response.status(500).json({
                message:"Error while retrieving user",
            })
        }else{

            if(data.length==0){

                response.status(404).json({
                    message:"data not found",
                })
            }else{

                response.status(200).json({
                    message:"data found",
                    data:data,
                })
            }
        }
    })
})

exports.getExamUserById = ((request, response) => {

    examUserSchema.findById(request.params.id).populate('exam').exec((error, data) => {

        if(error){

            response.status(500).json({
                message:"Error while retrieving user",
            })
        }else{

            if(data.length==0){
                response.status(404).json({
                    message:"data not found",
                })
            }else{
                response.status(200).json({
                    message:"data found",
                    data:data,
                })
            }
        }
    })
})