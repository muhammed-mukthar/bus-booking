const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const app=express()

app.use(express.json())

app.listen('4000',()=>{
    console.log('port running on 4000');
})