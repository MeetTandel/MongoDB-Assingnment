const express = require('express');

//dotenv is imported to hide the MongoDB URI
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//import mongoose
const mongoose = require("mongoose");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const quotesRouter = require('./routes/quotes')
const productsRouter = require('./routes/products')

const app = express();

//connect to database with mongoose
mongoose.connect(
    process.env.MongoDB_URI,
    {
        dbName: 'MongoDBAssignment',
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function(err){
        if(err){
            console.log("error", err);
        }
        else{
            console.log("Connected to DB successfully");
        }
    }
    )
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentsRouter);
app.use('/quote', quotesRouter);
app.use('/product', productsRouter);

module.exports = app;
