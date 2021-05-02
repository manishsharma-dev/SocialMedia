const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbURI = "mongodb+srv://manishsharma:Manys1112@node-rest-shop.hv00e.mongodb.net/Social?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


app.get('/',(req,res) => {
    res.send('We are on Home');
})


app.listen(3000);

