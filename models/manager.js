const mongoose = require('mongoose')

const ManagerSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    partyName: {
        type: String
    },
    inventoryNo:{
        type: String
    },
    destination:{
        type:String
    },
    tareWt:{
        type:Number,
        required: true
    },
    netWt:{
        type:Number,
        required: true
    },
    grossWt:{
        type:Number,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productQuantity:{
        type: Number,
        required: true
    },
    entry:{
        type: String,
        required:true
    },
    intime:{
        type:Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Manager', ManagerSchema)