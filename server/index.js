import express from 'express'

const mongoose = require('mongoose')


require('dotenv').config()


const authRouter = require('./routes/auth')

const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb+srv://admin:Admin123@cluster0.e3tfm.mongodb.net/UsersDB?retryWrites=true&w=majority',{
            //warning disable
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected')
    } 
    catch(error)
    {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()
const app = express()
app.use(express.json())
app.use('/api/auth/', authRouter)



const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))