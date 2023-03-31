// Import the module //

const express   = require('express');
const bcrypyjs = require('bcrypyjs'); 
const User = require('../models/users');
const   authRouter = express.Router();




/// Sign Up ///

authRouter.post("api/signup",  async(req, res) =>{

    try{

        const {name , email, password} = req.body;
        
        const exitingUser = await User.findOne({email});

        if (exitingUser){
            return res.status(400).json({message : "User  already exists with that email"})
        }

        const hasPassword = await bcrypyjs.hash(password,8);

        let user = new User({ name,email,password : hasPassword});

        user = await user.save();
        res.json(user);
    }
    catch (err){
        res.status(500).json({message : err.message});
    }
});











/// Sign In ///

authRouter.post("api/signin", async(req, res, res)=>{

    try{

            const {email, password} = req.body;

            const user = await User.findOne({email});

            if (!user){
                return res.status(400).json({message : "User is not exist"});
            }

            const  isMatch = await bcrypyjs.compare(password, user.password)
                if(!isMatch){
                    return res.status(400).json({message : "Incorrect Password"});
                }


                const token = jwt.sign({id:user._id}, "passwordKey");

    }catch{

    }
});















module.exports = authRouter; 