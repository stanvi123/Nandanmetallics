const mongoose = require('mongoose')

const GuardSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    vehical_no: {
        type: String,
        required: true
    },
    transport:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    intime:{
        type:Date,
        default: Date.now
    },
    tareWt:{
        type:Number,
        required: true
    },
    netWt:{
        type:Number,
        required: true
    },
    productName:{
        type:String,
        required:true
    },
    entryType:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Guard', GuardSchema)