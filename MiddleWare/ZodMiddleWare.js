const validate =(Schema)=> async(request,response,next)=>{

    try{

        await Schema.parseAsync({
            body:request.body,
            query:request.query,
            params:request.params
        });

        return next();
    }catch(error){
        return response.status(400).json({
            error:error
        });
    }
}

module.exports={validate}