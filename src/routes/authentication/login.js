const router = require('express').Router();
const {User, validateLogin} = require('../../models/Users');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    let body = {...req.body}
    try{
        const {error} = validateLogin(body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
    }

    if(!body.role) body = {...body, role:'user'}

    const {username, password} = req.body
    const user = await User.findOne({username});
    if(!user){
        return res.status(409).send({message: 'Please login with correct username.'})
    }
    //compare password hash from database and entered plain text password using compare method of bcrytjs
    const validPassword =  await bcrypt.compare(password, user.hashedPassword
        );
        console.log("valid Password", validPassword )
        if (!validPassword){
            return res.status(401).send({'message': "Invalid credentials"});
        }
        else{
            res.status(201).send({message:'User logged in  successfully.'});
    }
    }catch(err){
        res.status(500).send({message:'Internal server error'});
    }
})

module.exports = router;