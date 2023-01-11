const fs=require("fs");

function valid(FileName){
    return fs.existsSync(FileName) ? true : false;
}

module.exports.FilterName= ()=>{

    if(valid("Task/MOCK_DATA.json")){

        data=JSON.parse(fs.readFileSync("Task/MOCK_DATA.json",'utf-8'))
        console.log(data.filter(x=>x.first_name.startsWith('A')));
    }else{
        console.log("File is not exist!");
    }
}

module.exports.FilterGender = () => {

    if(valid("Task/MOCK_DATA.json")){
        data1=JSON.parse(fs.readFileSync("Task/MOCK_DATA.json",'utf-8'))
        console.log(data1.filter(x=>x.gender=="Male"))
    }else{
        console.log("File is not exists!");
    }
}