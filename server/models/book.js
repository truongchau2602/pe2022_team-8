const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    genre:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Genre"
    }],
    summary:{type:String},
    
});

module.exports = mongoose.model("Book", bookSchema);