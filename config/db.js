require('dotenv').config({ path: `${__dirname}/../config.env` });
const mongoose = require('mongoose');
const colors = require('colors');

console.log(process.env.URI);

const connectDB = async()=>{
    try {
        //making connection with Db 
       const conn =  await mongoose.connect(process.env.URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongo-DB is up and running ${conn.connection.host}` .cyan);
    } catch (error) {
        console.log(`Error Connecting to Mongodb ${error}` .yellow);
        process.exit(1);
    }
}

module.exports = connectDB;