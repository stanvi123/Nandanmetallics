const mongoose = require('mongoose')

const PartySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    gst_no:{
        type:String,
        required: true
    },
    contact:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Party', PartySchema)