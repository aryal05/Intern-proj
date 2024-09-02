import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import InquiryModel from "./models/Inquiry.js";

// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const InquiryModel = require('./models/Inquiry')
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/enquiry");


app.post('/contact', async (req,res)=>{
     try {
          const inquiry = await InquiryModel.create(req.body);
          res.json(inquiry);
     } catch(e) {
          res.json(e);
     }
     
     // InquiryModel.create(req.body)
     // .then(inquiry => res.json(inquiry))
     // .catch(err => res.json(err))
})


app.listen(process.env.PORT || 3001, () => console.log(`Server is running at port ${process.env.PORT || 3001}`))