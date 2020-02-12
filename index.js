const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const taskRouter = require('./routes/tasks');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const bookRouter = require('./routes/book');
const nonficbookRouter = require('./routes/nonficbook');
const mainsliderRouter =require('./routes/mainslider');
const auth = require('./auth');
const cors = require('cors');
const cart = require('./routes/cart');
const helpRouter = require('./routes/help');
const commingnewRouter = require('./routes/commingnew');
const order = require('./routes/order');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
app.use(express.urlencoded({extended: false }));

//static folder 
app.use(express.static('public'));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/mainslider', mainsliderRouter);
//app.use(auth.verifyUser);  //uncommenting because of no bearer
app.use('/categories', categoryRouter);
app.use('/tasks', taskRouter);
app.use('/book', bookRouter);
app.use('/nonficbook', nonficbookRouter);
app.use('/help', helpRouter);
app.use('/commingnew', commingnewRouter);
app.use('/cart', cart);
app.use('/order', order);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
