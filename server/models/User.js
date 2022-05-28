//model for mongo
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    //unique will prevent same username being created in database
    username: {type:String,require:true, unique:true},
    password:{type:String,require:true}
},
    //specify collection
    { collection: 'Users'}
)

const model = mongoose.model('UserSchema', UserSchema)
//export this file and using the module
module.exports = model