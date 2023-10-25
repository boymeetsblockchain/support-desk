const  express = require('express')
const { errorHandler } = require('./middlewares/errorMiddleware')
const dotenv = require("dotenv").config()
const colors = require('colors')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors');
const connectDB = require('./config/db')
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(errorHandler)

app.use('/api/users', require('./routes/userRoute'))
app.use('/api/tickets', require('./routes/ticketRoute'))


if(process.env.NODE_ENV==="production"){
    const __dirname= path.resolve()
    // set static folder 
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get("*",(req,res)=>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")))
}else{
    app.get("/",(req,res)=>{
        res.status(200).json({message:"welcome to the supoort Desk"})
    })
}
app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`)
})

