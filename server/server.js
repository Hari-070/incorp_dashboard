const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const companyRoutes=require('./Routes/companyRoutes')
const directorRoutes=require('./Routes/directorRoutes')
const eventRoutes=require('./Routes/eventRoutes')

const app=express()
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
.then(res=>{
    console.log("connected to DB")
})
.catch(err=>{
    console.log("error connecting")
})

app.use('/api',companyRoutes)
app.use('/api',eventRoutes)
app.use('/api',directorRoutes)

app.listen(PORT,()=>{
    console.log(`Application running on ${PORT}`)
})