const mongoose = require("mongoose")

const InquirySchema = new mongoose.Schema({
     name: String,
     email:String,
     message:String,
})

const InquiryModel = mongoose.model("inquiry", InquirySchema)
module.exports = InquiryModel