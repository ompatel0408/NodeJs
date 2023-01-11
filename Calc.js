var FirstName='Hello,World!'


// module.exports =FirstName


function sum(a,b){
    return a + b
}

// module.exports=sum

module.exports={FirstName,sum}


module.exports.sub=(a,b)=>{
    return a - b
}

module.exports.mul=(a,b)=>{
    return a * b
}
module.exports.div=(a,b)=>{

    if (b!=0){
        return a / b;
    }else{
        console.error("Invalid");
    }
}

module.exports.any="Hii";


