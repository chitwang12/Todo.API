const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const colors = require('colors');
const PORT = process.env.PORT || 5500;
const connectDB = require('./config/db');
const todos = require('./Routes/todos')
const app = express();


//MiddleWare 
app.use(morgan('tiny'));
app.use(bodyParser.json());

connectDB();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//Mount the routes 
app.use('api/v1/todos',todos);

app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`.green ) ;
})