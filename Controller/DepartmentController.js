const departmentSchema =require('../Model/DepartmentSchema')

exports.createDepartment=((request,response) => {

    let department = new departmentSchema(request.body);
    department.save((error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while creating department",
            })
        }else{

            response.status(201).json({
                message:"Department created successfully",
                data:data,
            })
        }
    })
})

exports.updateEmployees=((request,response)=>{

    departmentSchema.findByIdAndUpdate(request.params.id,request.body).populate('Employees').exec((error,data)=>{

        if(error){
            response.status(500).json({
                message:"Error while updating department",
            })
        }else{
            response.status(200).json({
                message:"Department updated successfully",
                data:data,
            })
        }
    })
})