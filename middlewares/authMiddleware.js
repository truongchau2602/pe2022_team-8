/**
 * Middleware for checking whether cookies session store a valid userId or not
 */
const User = require("../models/user")
module.exports = (req, res, next)=>{
    console.log("Invoke in auth middleware")
    User.findById(req.session.userId, (err, user)=>{
        if(err|| !user){
            // res.send("Redirect to login")
            return res.redirect("/auth/login")
        }
        next()
    })
}