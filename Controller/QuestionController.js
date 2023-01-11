const QuestionSchema=require('../Model/QuestionSchema');

exports.createQuestions=((request,response)=>{

    QuestionSchema.create(request.body,(error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while creating questions",
            })
        }else{

            response.status(201).json({
                message:"Successfully created questions",
                data:data,
            })
        }
    })
})