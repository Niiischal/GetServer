const mongoose = require('mongoose')
const Joi= require('joi')
const passwordComplexity = require('joi-password-complexity');
const {Schema} = mongoose;

JWT_SECRET_CODE = 'nischalKhatiwada@77'

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


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, JWT_SECRET_CODE, {expiresIn: '7d'});
    return token
}

const User = mongoose.model('User', userSchema)


const validate = (data) => {
    const schema = Joi.object({
        username : Joi.string().required().label('Username'),
        contact : Joi.string().required().label('Contact'),
        email : Joi.string().required().label('Email'),
        password : passwordComplexity().required().label('Password'),
        role: Joi.string().label('Role')
    });
    return schema.validate(data);
};


module.exports = {User, validate}