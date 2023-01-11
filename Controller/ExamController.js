const ExamSchema=require('../Model/ExamSchema')


exports.createExam=((request,response)=>{

    ExamSchema.create(request.body,(error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while creating exam",
            })
        }else{
            response.status(201).json({
                message:"Exam created successfully",
                data:data,
            })
        }
    })
})

exports.getExamList=((request,response)=>{

    ExamSchema.find((error,data)=>{

        if(error){
            response.status(500).json({
                message:"Error while getting exams",
            })
        }else{
            if(data.length==0){
                response.status(404).json({
                    message:"No exams found",
                })
            }else{

                response.status(200).json({
                    message:"Exams found",
                    data:data,
                })
            }
        }
    })
})

exports.getExamById=((request,response)=>{
    ExamSchema.findById(request.params.id,(error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while getting exams",
            })
        }else{
            if(data.length==0){

                response.status(404).json({
                    message:"No exams found",
                })
            }else{
                response.status(200).json({
                    message:"Exams found",
                    data:data,
                })
            }
        }
    })
})