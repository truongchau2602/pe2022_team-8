const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { json } = require('express/lib/response')
//very important secret, can manipulate entire payload with it
const JWT_SECRET = 'werylfdfvbnmnbv542552@#$%^%$skurh*^*&5561'
const router = express.Router()
const argon2 = require('argon2')
const User = require('../models/User')

//@Route POST api/auth/register
//@Desc Register User
//@Access Public

router.post('/register', async(req,res)=>{
    //request input username and password
    const{username, password: plainTextPassword} = req.body
    //check username if valid
    if(!username || typeof username !== 'string'){
        return res.json({status:'error',error:'Invalid username'})
    }
    //check pass if valid
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status:'error',error:'Invalid password'})
    }
    //check pass if <6
    if(plainTextPassword.length<5){
        return res.json({status:'error',error:'Password too short. Must be at least 6 characters'})
    }

    //hash the password for better protection
    const password = await bcrypt.hash(plainTextPassword,10)

    //creating a new user
    try{
        //this function create new document in collection (new user)
       const response = await User.create({
            username,
            password
        })
        //print out the document in json format in console if successful
        console.log('User created successfully: ',response)
    }catch(error){
        //11000 is err code for key violation in db
        if (error.code ===11000)
        {       
        return res.json({status:'error', error:'Username already in use'})
        }
        //other error
        throw error
    }
    //output status ok if post worked
    res.json({status:'ok'})
})

router.post('/login', async(req,res)=>{
    //evaluate if the username and pass client send correct or not
    const {username , password} = req.body
    //find that one user, lean() for json obj represent
    const user = await User.findOne({username}).lean()
    //if that user not exist
    if(!user){
        return res.json({status: 'error',error: 'Invalid username/password'})
    }

    if(await bcrypt.compare(password, user.password)){
        //the username, password combination is successful

        const token = jwt.sign({
            id: user._id,
            username: user.username 
        }, JWT_SECRET)

        return res.json({status: 'ok',data: token})

    }
    res.json({status: 'error',data :'Invalid username/password'})
})

router.post('/change-password', async(req,res)=>{
    //request token just got from login and newpassword from body of html
    const { token, newpassword: plainTextPassword} = req.body

    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status:'error',error:'Invalid password'})
    }
    //check pass if <6
    if(plainTextPassword.length<5){
        return res.json({status:'error',error:'Password too short. Must be at least 6 characters'})
    }
    //take token received to verify and decode
    try{
        //verify token and return decoded token
    const user = jwt.verify(token,JWT_SECRET)
    //take user id
    const _id = user.id

    const password = await bcrypt.hash(plainTextPassword, 10)
    //update password by find the user id 
    await User.updateOne(
        { _id },
        {
            $set: { password }``
        }
        )
        res.json({status: 'ok'})
    } catch(error){
        //catch error without crashing the server
        console.log(error)
        res.json({ status: 'error', error: ':))'})
    }
})

router.get('/', (req, res) => res.send('USER ROUTE'))

module.exports = router