const mongoose=require('mongoose')
mongoose.set('strictQuery', true)

exports.connectMongodb=async()=>{
const dbUri=process.env.DBURL
try{
 await mongoose.connect(dbUri)
 .then(()=>console.log('connected to db')
 )
}catch(err){
       console.error('err in mongoose connect');
    process.exit(1)
}

}

