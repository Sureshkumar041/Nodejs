const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: [true,"Cannot be blank"]
    },
    username:{
        type: String,
        required: [true,"Cannot be blank"],
        unique: true
    },
    email:{
        lowercase: true,
        required: [true,"Cannot be blank"],
        unique: true
    }
});

const userModel =mongoose.model("userModel",userSchema);

const data = new userModel({
    name: "Suresh",
    username: "Suresh kumar",
    email : "suresh@gmail.com"
});

data.save();

module.exports = userModel;