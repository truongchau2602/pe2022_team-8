const mongoose = require('mongoose');
var BookInstanceSchema = new mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
    },
    status:{
        type: String, 
        required: true, 
        enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], 
        default: 'Maintenance'
    },
    due_back: {type: Date, default: Date.now}
})

module.exports= mongoose.model("BookInstance", BookInstanceSchema);