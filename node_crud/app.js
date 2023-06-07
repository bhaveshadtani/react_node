require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();

var usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', usersRouter);

mongoose.connect("mongodb://localhost:27017/react_node_crud")
  .then(ress => {
    console.log("Database connection established");
  })
  .catch(err => {
    console.log(err);
  })

app.listen(4000, (req, res) => {
  console.log('Server running on port 4000');
});

