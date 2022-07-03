const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    productName: String,
    authorName:{
        type:String,
        default:"Author Chau Truong"
    }, 
    description:{
        type:String,
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    published:{
        type:Number,
        default:2022
    },
    price:{
        type:Number,
        default:10
    },
    label:String,
    category: String, 
    expireDate: String, 
    unit:{
        type:Number,
        default:1
    }, 
    image: String
})

const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart