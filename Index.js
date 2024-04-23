const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// app.use(express.json());
const port = "3000";

app.use(bodyParser.json());

const url = "mongodb://localhost:27017/tasksync";

mongoose.connect(url, {})
.then(result => console.log('Database Connected'))
.catch(result => console.log(err));

// Routes
const CategoryRoute = require('./Route/Category.route');
app.use('/category', CategoryRoute);

const PersonalTaskRoute = require('./Route/PersonalTask.route');
app.use('/personaltask', PersonalTaskRoute);

const ProfileRoute = require('./Route/Profile.route');
app.use('/profile', ProfileRoute);

const UserRoute = require('./Route/User.route');
app.use('/user', UserRoute);


const TeamTaskRoute = require('./Route/TeamTask.route');
app.use('/teamtask', TeamTaskRoute);

// Enable CORS middleware
app.use(cors({
    origin: 'http://192.168.1.26:8081',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

//wrong endpoint
app.use((req, res, next) => {
    const err = new Error('End point not found');
    err.status = 404;
    next(err);
});
  
  //Express Error Handle / Middleware
  app.use((req, res, next) =>{
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    });
  });
  

app.listen(port, () => {
    console.log('Listening to Port 3000.....');
  });