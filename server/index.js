const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const InquiryModel = require('./models/Inquiry')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/enquiry");


app.post('/contact', (req,res)=>{
     InquiryModel.create(req.body)
     .then(inquiry => res.json(inquiry))
     .catch(err => res.json(err))

})


app.listen(3001, ()=>{
     console.log("Server is running")
})