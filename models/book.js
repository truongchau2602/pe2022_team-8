const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    productName: String,
    authorName:String, 
    description: String, 
    label:String,
    category: String, 
    expireDate: String, 
    unit: Number, 
    image: String
})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book