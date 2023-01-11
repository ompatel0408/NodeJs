const answerSchema =require('../Model/AnswerSchema')

exports.createAnswer =((request,response)=>{

    answerSchema.create(request.body,(error,data)=>{

        if(error){

            response.status(500).json({
                message:"Error while creating answer",
            })
        }else{

            response.status(201).json({
                message:"Created answer",
                data:data,
            })
        }
    })
})