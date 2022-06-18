// This file handle the logic when user click on "register" button
const User = require("../models/user")

module.exports = (req, res) =>{
    console.log("Request body:",req.body)
    User.create(req.body,
        function(err,user){
            if(err){
                console.log("Err:",err)
                // alert("Error")
                return res.redirect("/auth/register")
            }
            // alert("You have creat your account successfully")
            console.log("New user:",user)
            res.redirect("/")
        })
}