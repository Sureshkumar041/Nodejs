const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const router = express.Router();

// Import Schema 
const userModel = require('../model/userdd');

router.get('/',(req,res)=>{
    res.send("Register here...");
});

router.post('/',(req,res)=>{
    res.send("Post method here...!");
    var name = req.bpdy.name;
    var username = req.body.username;
    // var email = req.body.email;

    var data ={
        "name": name,
        "username" : username,
        "email" : email
    };

    data.save();
    res.send("Data inserted")
    // res.json(data);
})

module.exports = router;