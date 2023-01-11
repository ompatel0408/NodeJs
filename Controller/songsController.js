const songSchema = require('../Model/songSchema.js');

exports.createSong = ((request,response)=>{

    songSchema.create(request.body,(error,data)=>{

        if(error){
            return response.status(500).json({
                message:"Error while creating song",
            })
        }else{
            return response.status(201).json({
                message:"Successfully created song",
                data:data,
            })
        }
    })
})