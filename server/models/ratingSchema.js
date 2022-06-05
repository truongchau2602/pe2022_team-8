const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
		ref: "Book",
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    comment:String,
    giveStar:{
        type:Number,
        min:0,
        max:5,
    }
    })
module.exports = mongoose.model("Rating", ratingSchema);