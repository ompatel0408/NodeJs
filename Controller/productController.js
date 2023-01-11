const productSchema=require('../Model/productSchema')

exports.createProducts=((request,response) => {

    productSchema.create(request.body,(error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while creating products",
            })
        }else{
            response.status(201).json({
                message:"Created products",
                data:data,
            })
        }
    })
})