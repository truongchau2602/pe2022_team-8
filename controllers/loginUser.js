// This file handles the logic when user click on "Continue" button on login page
const bcrypt = require("bcrypt")
const User = require("../models/user")

// Validate username and password from /auth/login
module.exports = (req,  res) =>{
    const {username, password} = req.body
    User.findOne({username:username}, (err,user)=>{
        if(user){
            bcrypt.compare(password, user.password, (err, same)=>{
                if(same){
                    console.log("Login successfully")
                    // alert("Login successfully")
                    // req.session.userId = user._id
                    // if passwords match, store user session
                    res.redirect("/")
                } else {
                    // alert("Wrong password, please try again!")
                    console.log("Wrong password")
                    res.redirect("/auth/login")
                }
            })
        } else {
            // alert(("cannot find username"))
            console.log("Cannot find any matched username")
            res.redirect("/auth/login")
        }
    })
}