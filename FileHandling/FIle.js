const fs=require("fs")






module.exports.WriteFile = ()=>{
    fs.writeFileSync("FileHandling/TestFile.txt","Test")
}

module.exports.WriteAppendFile = ()=>{
    fs.appendFileSync("FileHandling/TestFile.txt","Hello,World!");
}

module.exports.ReadFile = ()=>{
    let data=fs.readFileSync("FileHandling/TestFile.txt",'utf-8')
    console.log(data)
}

module.exports.DeleteFile = ()=>{

    if(fs.existsSync("FileHandling/TestFile.txt"))
    {
        fs.unlinkSync("FileHandling/TestFile.txt")
    }else{
        console.log("File not found!");
    }
}

function valid(FileName){
    return fs.existsSync(FileName) ? true : false;
}
module.exports.CreateFile = ()=>{

    if(valid("FileHandling/TestFile.txt")){
        console.log("File already exists!");
    }else{
        fs.openSync("FileHandling/TestFile.txt",'w')
    }
}

module.exports.CreateFolder = ()=>{
    if(fs.existsSync("FileHandling/NewFolder")){
        console.log("Folder already exists!");
    }else{
        fs.mkdirSync("FileHandling/NewFolder")
    }
}

module.exports.ReadFolder1 = ()=>{
    if(valid("FileHandling/NewFolder1")){
        console.log("Folder already exists!");
    }else{
        data=fs.readdirSync("FileHandling/NewFolder")
        console.log(data)
        data.forEach((file) => {
            console.log(file);
          });
    }
}

module.exports.copyFile = ()=>{
    
    if(valid("FileHandling/TestFile.txt")){

        if(valid("FileHandling/NewFolder")){

            if(valid("FileHandling/NewFolder/TestFile.txt")){
                console.log("File already exists!");
            }else{
                fs.copyFileSync("FileHandling/TestFile.txt","FileHandling/NewFolder/TestFile.txt")
                console.log("File copy.");
            }
        }else{
            console.log("Folder not found!")
        }
    }else{
        console.log("File not found!");
    }
}

module.exports.WriteJson= ()=>{

    var user=[
        {
            "name": "A",
            "email": "A@example.com",
            "password": "Artifical intelligance"
        },
        {
            "name": "B",
            "email": "B@example.com",
            "Password":"ND"
        },
        {
            "name": "C",
            "email": "C@example.com",
            "Password":"Nc"
        }
    ]

    fs.writeFileSync("FileHandling/TestJson.json", JSON.stringify(user))
    console.log("Writing test Json successfully!");
}

module.exports.ReadJson = () => {
    data=fs.readFileSync("FileHandling/TestJson.json","utf-8")
    console.log(JSON.parse(data))
}

module.exports.RenameFile = () => {
    if(valid("FileHandling/TestFile.txt")){
        fs.renameSync("FileHandling/TestFile.txt","FileHandling/Test.txt")
        console.log("Rename successfully!");
    }else{
        console.log("File doesn't exist!");
    }
}

