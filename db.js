const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error while connecting" + error.message);
    }
}

module.exports = connectDB