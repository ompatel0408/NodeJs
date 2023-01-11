const playListSchema= require('../Model/playListScahema')


exports.createPlayList =((request,response)=>{

    playListSchema.create(request.body,(error,data)=>{

        if(error){

            return response.status(500).json({
                message:"Error while creating playList",
            })
        }else{

            return response.status(201).json({
                message:"PlayList created successfully",
                data:data,
            })
        }
    })
})

exports.pushSongs = ((request,response)=>{

    playListSchema.findOneAndUpdate(request.params.id,{$push:{songs:request.body.songId}},(error,data)=>{

        if(error){
            return response.status(500).json({
                message:"Error while updating playList",
            })
        }else{
            return response.status(200).json({
                message:"PlayList updated successfully",
                data:data,
            })
        }
    })
})

exports.getPlayList = ((request,response)=>{

    playListSchema.find().populate('songs').exec(function(error,data){
            if(error){

                return response.status(500).json({
                    message:"Error while getting playList",
                })
            }else{
                return response.status(200).json({
                    message:"PlayList retrieved successfully",
                    data:data,
                })
            }
    })
})

exports.pullSongs = ((request,response)=>{
    playListSchema.findOneAndUpdate(request.params.id,{$pull:{songs:request.body.songId}},(error,data)=>{

        if(error){

            return response.status(500).json({
                message:"Error while updating playList"
            })
        }else{

            return response.status(200).json({
                message:"PlayList updated successfully",
                data:data,
            })
        }
    })
})