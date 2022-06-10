const models = require('../../models/index')
const bycrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

async function signup(req,res,next) {  
    const usernameExist = await models.User.findOne({username: req.body.username})
    if(usernameExist){
        res.status(400).json({"error":'Username already Exist'}) 
    } 

    const salt = await bycrypt.genSalt(10);
    hashpassword = await bycrypt.hash(req.body.password, salt)
    const user =  new models.User({
        username: req.body.username,
        password: hashpassword,
        address: req.body.address,
        phone_number: req.body.phone_number,
    })
    try{
        const userSignup = await user.save()
        const payload = {
            user: {
                id: userSignup.id
            }
        };
        jwt.sign(payload,"anystring",{expiresIn: '7d'},function(err, token){
            if(err){
                res.send(err)
            }
            res.status(200).json({
                token,
                userSignup
            })
        })
    } 
    catch(err){
        res.status(400).json({'error':err})
    }
}

module.exports = {
    signup,
}