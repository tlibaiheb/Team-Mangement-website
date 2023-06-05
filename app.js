var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config()
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

var indexRouter = require('./routes/index');
const passport = require('passport')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)

/* -- db connection -- */
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4


})
    .then(() => { console.log("db is connected !") })
    .catch(err => console.log(err.message))


app.use('/api', indexRouter);


module.exports = app;
