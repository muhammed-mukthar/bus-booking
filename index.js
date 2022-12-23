const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const authRoute =require('./routes/auth')

const {  connectMongodb } = require('./utils/connect')
dotenv.config()
const app=express()

app.use(express.json())
app.use(morgan('common'))
app.use('/api/auth', authRoute)
app.listen('5000',()=>{
    console.log('port running on 5000');
    connectMongodb()
})