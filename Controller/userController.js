const userSchema = require('../Model/userSchema')
// 200 response status code for success
// 201 response status code for created successfully
// 202 response status code for accepted successfully
// 204 response status code for  No Content :There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
// 400 response status code for invalid request or bad request
// 401 response status code for Unauthorized:Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
// 404 response status code for not found





exports.findAllRecords = ((request,response)=>{

    userSchema.find((error,data)=>{

        if(error){
            response.status(500).json({
                message:'Error while fetching data!'
            })
        }
        else{
            if (data.length===0){
                response.status(404).json({
                    message:'Empty data!',
                })
            }else{
                response.status(200).json({
                    message:'Success while fetching data!',
                    data:data
                })
            }
            
        }
    })
})

exports.getRecordsById = ((request,response)=>{
  let id= request.params.id;
  
  userSchema.findById(id, (error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while getting records!"
            })
        }else{
            if(data.length ==0 || data==undefined || data==null){
                response.status(404).json({
                    message:"No records found!"
                })
            }else{
                response.status(200).json({
                    message:"Success while getting records!",
                    data: data
                })
            }
        }
  });
});

exports.createUser = ((request,response)=>{
  
    console.log(request.body);

    const user = new userSchema(request.body);
    user.save((error,success)=>{

        if(error){
            response.status(500).json({
                message:"Error While saving user!"
            })
        }else{
            response.status(201).json({
                message:"User saved successfully!",
                data:success
            })
        }
    })
})

exports.DeleteUsers = ((request,response)=>{

    let id = request.params.id;

    userSchema.findByIdAndDelete(id,(error,data)=>{
        if(error){
            response.status(500).json({
                message: 'Error while deleting user'
            })
        }
        else{
            response.status(204).send()
        }
    })
})

exports.updateUser = (request,response)=>{

    let id=request.params.id;

    try{
        if(request.body._id){
            throw new Error('Id is not allowed in the request body')
        }else{
            userSchema.findByIdAndUpdate(id,request.body,(error,data)=>{
                if(error){
                    response.status(500).json({
                        message:"Error in updating user",
                    })
                }else{
                    response.status(200).json({
                        message:"data updated successfully",
                        data:data
                    })
                }
            })
        }
    }catch(err){

        response.status(400).json({
            message:err.message
        })
    }
}