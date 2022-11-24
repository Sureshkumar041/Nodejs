const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middle Ware
const register = require('./router/register');
const bodyParser = require('body-parser');
app.use('/register', register);
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/trydata',{ useNewUrlParser: true });
var db = mongoose.connection;
db.once('open', function() {
  console.log("Db Connected");
});
db.on('error', function(err) {
  console.log(err);
});

app.get('/',(req,res)=>{
    res.send("Try...!");
})

app.listen(port, (error) => {
    if (error) console.log("Server not responding ...!");
    console.log("Server running successfully in port", port);
});