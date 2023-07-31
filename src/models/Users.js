const mongoose = require('mongoose')
const joi = require('joi')
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    contact:{
        type: Number,
        minLength : 10,
        maxLength : 25,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password:{
        type:String,
        required: true
    }
});

module= mongoose.model('User', userSchema)