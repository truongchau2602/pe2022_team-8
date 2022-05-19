const express = require('express');
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

//@Route POST api/auth/register
//@Desc Register User
//@Access Public

router.post('/register', async(req,res)=>{
    const {username, password} = req.body

    if(!username || !password)
        return res.status(400).json({success: false, message: 'Missing'})
        try{
            const user = await User.findOne({username})

            //check for existing
            if(user)
            return res.status(400).json({success: true, message: 'Username already exists.'})
            
            const hashedPassword = await argon2.hash(passsword)
            const newUser = new User({username, password:hashedPassword})
            await newUser.save()

            //access token
            const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
        }catch(error){}
})


router.get('/', (req, res) => res.send('USER ROUTE'))

module.exports = router