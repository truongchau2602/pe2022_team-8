const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    firstName:String,
    lastName:String,
    email:{type:String, required:true},
    workplace:String,
    loans:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BookInstance",
    }],
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rating",
    }]
})
userSchema.pre("save", function(next){
    const user = this
    bcrypt.hash(user.password, 10, (err, hash)=>{
        user.password = hash
        next()
    })
})
userSchema.virtual("fullName").get(function(){
    var fullName="";
    if(this.firstName && this.lastName){
        fullName = this.firstName +" "+ this.lastName;
    }
    return fullName;
})

module.exports = mongoose.model("User",userSchema);