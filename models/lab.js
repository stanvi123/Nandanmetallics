const mongoose = require('mongoose')

const LabSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    carbon_no:{
        type:Number,
        default:0
    },
    heat_no:{
        type:Number,
        default:0
    },
    manganese:{
        type:Number,
        default:0
    },
    phosphorous:{
        type:Number,
        default:0
    },
    sulphur:{
        type:Number,
        default:0
    },
    silicon:{
        type:Number,
        default:0
    },
    entryType:{
        type: String,
        required:true
    },
    intime:{
        type:Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Lab', LabSchema)