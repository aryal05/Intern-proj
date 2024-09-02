// const mongoose = require("mongoose")
import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
     name: String,
     email:String,
     message:String,
})

const InquiryModel = mongoose.model("inquiry", InquirySchema)
// module.exports = InquiryModel

export default InquiryModel;