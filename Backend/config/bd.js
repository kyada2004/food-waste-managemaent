const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongDb conected successfully")
    }
    catch (error){
         console.error('Error connecting to mongodg',error);
    }

}

module.exports = connectdb;