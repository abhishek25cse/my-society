const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

// integration of template engine pug
// to install pug use -- npm install pug --save
app.set('view engine', 'pug');
app.set('views','./views');


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const memberRouter = require('./routes/member');
const flatRouter = require('./routes/flat');
const parkingRouter = require('./routes/parking');
const configRouter = require('./routes/config')

//app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/member',memberRouter);
app.use('/flat',flatRouter);
app.use('/parking',parkingRouter);
app.use('/config',configRouter)

app.get('/*', function(req,res) {
  res.render('error');
})
app.listen(port, () => {
    console.log(`server is running on port :  ${port}`);
})
