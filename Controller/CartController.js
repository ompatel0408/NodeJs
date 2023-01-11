const cartSchema=require('../Model/cartSchema')

exports.addToCart=((request,response)=>{

    cartSchema.create(request.body,(error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while adding to cart",
            })
        }else{
            response.status(201).json({
                message:"Added to cart",
                data:data,
            })
        }
    })
})

exports.getCart=((request,response)=>{

    cartSchema.find().populate('User').populate('products').exec((error,data)=>{

        if(error){

            response.status(500).json({
                message:"Error while getting cart",
            })
        }else{

            if(data.length==0){
                response.status(404).json({
                    message:"Cart not found",
                })
            }else{

                response.status(200).json({
                    message:"Cart found",
                    data:data,
                })
            }
        }
    })
})

// this display all the carts in the given user id
exports.getCartById=((request,response)=>{

    cartSchema.find({User:request.params.id}).populate('User').populate('products').exec((error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while getting cart",
            })
        }else{

            if(data.length==0){

                response.status(404).json({
                    message:"Cart not found",
                })
            }else{
                response.status(200).json({
                    message:"Cart found",
                    data:data,
                })
            }
        }
    })
})


// this display all the users who have this product

exports.getCartByProductId=((request,response)=>{

    cartSchema.find({products:request.params.id}).populate('User').populate('products').exec((error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while getting cart",
            })
        }else{

            if(data.length==0){

                response.status(404).json({
                    message:"Cart not found",
                })
            }else{

                response.status(200).json({
                    message:"Cart found",
                    data:data,
            })
            }
        }
    })
})