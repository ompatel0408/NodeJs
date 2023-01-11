const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app=express();
const PORT=3000;
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
// app.get('/TestApi',((request,response)=>{
//     response.send("Hello ,World!");
// }))
// app.use('/TestApi',TestRoutes.router)

// simple get testApis
const TestRoutes= require("./routes/TestRoutes")
app.use('/TestApi',TestRoutes.router)
app.use('/TestApi1',TestRoutes.router1)

// get Api with database connection
const userRoutes = require('../Learning/routes/userRoutes')
app.use('/userApi',userRoutes)

// get Api with database connection and with id
const userRoutesById = require('../Learning/routes/userRoutes')
app.use('/userApi',userRoutesById)

// post Api with database connection

const createUser= require('../Learning/routes/userRoutes')
app.use('/user',createUser)


// delete user by using delete request
const deleteUser= require('../Learning/routes/userRoutes')
app.use('/userApi',deleteUser)

// update user by using update request
const updateUser= require('../Learning/routes/userRoutes')
app.use('/userApi',updateUser)

// get data
const getData=require('./routes/testRoutes1')
app.use('/test1',getData)

// get data with id
const getDataById=require('./routes/testRoutes1')
app.use('/test1',getDataById)

// create new  data
const createData=require('./routes/testRoutes1')
app.use('/test1',createData)

// delete data by id
const deleteData=require('./routes/testRoutes1')
app.use('/test1',deleteData)

// update data by id
const updateData=require('./routes/testRoutes1')
app.use('/test1',updateData)


// create new  departments
const createDepartment=require('./routes/departmentRoutes')
app.use('/department',createDepartment)

// create new employees
const createEmployee=require('./routes/EmployeeRoutes')
app.use('/Employee',createEmployee)

// get employees
const getEmployees=require('./routes/EmployeeRoutes')
app.use('/Employee',getEmployees)

// create new product
const createProduct=require('./routes/productRoutes')
app.use('/product',createProduct)

// add to cart
const addToCart=require('./routes/cartRoutes')
app.use('/cart',addToCart)

// get all employees
const getAllEmployees1=require('./routes/EmployeeRoutes')
app.use('/Employee1',getAllEmployees1)

// get all products

const getCart = require('./routes/cartRoutes')
app.use('/cart',getCart)

// get cart by id

const getCartById=require('./routes/cartRoutes')
app.use('/cart',getCartById)

const getCartByProductId= require('./routes/cartRoutes')
app.use('/cart1',getCartByProductId)

// update employees

const updateEmployee=require('./routes/departmentRoutes');
app.use('/department',updateEmployee)


// create new Exam
const createExam=require('./routes/ExamRoutes')
app.use('/exam',createExam)

// create new question
const createQuestion=require('./routes/questionRoutes')
app.use('/questions',createQuestion)

// create new answer
const createAnswer=require('./routes/answerRoutes')
app.use('/answer',createAnswer)

// add user 

const addUser=require('./routes/ExamUserRoutes')
app.use('/addExamUser',addUser)

// get Exam users

const getExamUsers=require('./routes/ExamUserRoutes')
app.use('/getExamUser',getExamUsers)

// get Exam users by id

const getExamUsersById=require('./routes/ExamUserRoutes')
app.use('/getExamUser',getExamUsersById)

// get examList

const getExamList=require('./routes/ExamRoutes')
app.use('/exam',getExamList)

// get exam by id

const getExamById=require('./routes/ExamRoutes')
app.use('/exam',getExamById)

// create new role
const createRole =require('./routes/RolesRoutes')
app.use('/roles',createRole)

// create a new playList
const createPlayList=require('./routes/playListRoutes')
app.use('/playList',createPlayList)

// create new song
const createSong=require('./routes/songRoutes')
app.use('/songs',createSong)

// update new song
const updateSong=require('./routes/playListRoutes')
app.use('/playList',updateSong)

// get playList 

const getPlayList=require('./routes/playListRoutes')
app.use('/playList',getPlayList)

// update new song

const updateSong1=require('./routes/playListRoutes')
app.use('/playList1',updateSong1)

// create new user
const createUserSignup=require('./routes/userSignupRoutes')
app.use('/signup',createUserSignup)

mongoose.connect('mongodb://localhost:27017/user',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(error)=>{
    if (error){
        console.log(error);
    }else{  
        console.log('connected to DB server!')
    }
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})





