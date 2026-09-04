const path = require('node:path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
});


const mongoose = require('mongoose');

const connectDB = async () => {

   await mongoose.connect(process.env.MONGO_URI,{
    
    timeoutMS: 15000
   }

   )

}

module.exports = connectDB;