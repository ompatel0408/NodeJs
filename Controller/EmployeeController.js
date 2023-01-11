const EmployeeSchema = require('../Model/EmployeesSchema')

exports.createEmployee=((request, response) => {

    EmployeeSchema.create(request.body,(error,data)=>{
        if(error){
            response.status(500).json({
                message:"Error while creating employee"            
            })
        }else{
            response.status(201).json({
                message:"Employee created successfully",
                data:data
            })
        }
    })    
})

exports.getAllEmployees=((request, response) => {

    EmployeeSchema.find((error,data)=>{
        if(error){

            response.status(500).json({
                message:"Error while getting all employees"
            })
        }else{

            if(data.length==0){
                response.status(404).json({
                    message:"Employee not found",
                })
            }else{
                response.status(200).json({
                    message:"Employess found",
                    data:data
                })
            }
        }
    })
})


exports.getAllEmployeeWithPopulate=((request, response) => {

    EmployeeSchema.find().populate('department').exec((error,data)=>{

        if(error){
            return response.status(500).json({
                message:"Error while getting all employees"
            })
        }else{
            if(data.length==0){
                return response.status(404).json({
                    message:"Employee not found",
                })
            }else{
                return response.status(200).json({
                    message:"Employess found",
                    data:data
                    })
            }
        }
    })
})