const testSchema1= require('../Model/TestSchema1')


// db.schemaname.find() in mongodb
// In node schemaName= our schemaName
exports.getAllData=((request,response)=>{

    testSchema1.find((error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while getting data",
            })
        }else{
            if(data.length==0){

                response.status(404).json({
                    message:"data not found"
                })
            }else{
                response.status(200).json({
                    message:"data fetch successfully",
                    data: data
                })
            }
        }
    })
})

exports.getDataById=((request,response)=>{
    
    let id= request.params.id;
    testSchema1.findById(id,(error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while getting data",
            })
        }else{

            if(data.length==0){
                response.status(404).json({
                        message:"data not found"
                })
            }else{
                response.status(200).json({
                    message:"data fetch successfully",
                    data: data
                })
            }
        }
    })
})

exports.createData=((request,response)=>{

    let requestBody= request.body;
    testSchema1.create(requestBody,(error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while creating data",
            })
        }else{
            response.status(201).json({
                message:"data created successfully",
                data: data
            })
        }
    })
})

exports.deleteData=((request,response)=>{
    let id=request.params.id;

    testSchema1.findByIdAndDelete(id,(error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while deleting data",
            })
        }else{
            response.status(204).send();
        }
    })
})

exports.updateData=((request,response)=>{
    let id=request.params.id;
    let body=request.body;

    testSchema1.findOneAndUpdate(id,body,(error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while updating data",
            })
        }else{
            response.status(200).json({
                message:"data updated successfully",
                data: data
            })
        }
    })
})