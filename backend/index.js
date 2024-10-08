const express=require('express')
const dotenv=require('dotenv')
const connectDb = require('./connectDB')
const cors=require('cors')
const { errorController } = require('./middlewares/errorHandler')

dotenv.config()


const app=express()


app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET',"PUT","POST","DELETE"]
}))
app.use(express.json())







app.use("*",errorController)

//database connection
connectDb().then(()=>{
    console.log("DB connected successfully")
    app.listen(3000,()=>{
        console.log('Server is listening to port')
    })
}).catch((err)=>console.log(err.message))



