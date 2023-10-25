const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb Connected on ${con.connection.host}`.cyan.underline)
    } catch (error) {
         console.log(`Error:${error.message}`)
         process.exit(1)
    }

}

module.exports = connectDb