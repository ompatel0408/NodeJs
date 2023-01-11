const bcrypt = require('bcrypt')

const saltRounds = 10;


// hasing password by using hashSync function
const hashPasswordSync = (Password)=>{

  return bcrypt.hashSync(Password,saltRounds)
}

console.log(hashPasswordSync("om"))

// compare password by by using compareSync function

const comparePassword = (password,hash)=>{

    bcrypt.compare(password,hash,(error,data)=>{
        console.log(data)
    })
}

comparePassword("om","$2b$10$j5xx3phUhuHcyYGu8LY0S.s4fk0aK5EH0dRt9NYi8b1ydZfMEOYnO")


// hasing password by using hash function

const hashPassword = (Password)=>{

    bcrypt.hash(Password,saltRounds,(error,data)=>{

        try{
            if(error){
                throw new Error("Error while hashing password");
            }else{
                console.log(data);    
            }
        }catch(error){
            console.log(error.message);
        }
    })
}
hashPassword("ABC")

const hashPasswordAsync = async(Password)=>{

   return await bcrypt.hash(Password,saltRounds)
}

hashPasswordAsync("ABC").then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error.message);
})

