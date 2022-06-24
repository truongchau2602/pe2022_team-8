const express = require("express")
const app = new express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const expressSession = require("express-session")

const loginUserController = require("./controllers/loginUser")
const registerUserController = require("./controllers/registerUser")

const authMiddleware = require("./middlewares/authMiddleware")

const mongoose = require("mongoose")
const db = "mongodb+srv://vgulibrarydatabase2022:vgu2022@cluster0.4vlmc.mongodb.net/Tiktak?retryWrites=true&w=majority"
mongoose.connect(db)
        .then(()=>{console.log("Mongoose connected...")})
        .catch(err =>{console.log(err)})

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({
    secret:"keyboard cat"
}))


app.listen(4005, ()=>{
    console.log("Ok. App listen on port 4005")
})
const homeController = require("./controllers/home")
const Book = require("./models/book")
const contactController = require("./controllers/contact")
const aboutController = require("./controllers/about")
const loginController = require("./controllers/login")
const registerController = require("./controllers/register")
const logoutController = require("./controllers/logout")
const checkoutController = require("./controllers/checkout")
global.loggedIn = null
app.use("*", (req,res,next)=>{
    loggedIn = req.session.userId
    next()
})
app.get("/", homeController)
app.get("/contact",contactController)

app.get("/auth/login", loginController)
app.get("/about", aboutController)
app.get("/login",loginController)
app.get("/register", registerController)
app.get("/auth/register", registerController)
app.get("/auth/logout", logoutController)
app.get("/checkout", authMiddleware, checkoutController)
app.get("/bookItem",(req,res)=>{
    res.render("bookItem")
})
app.get("/bookItems/:id", (req, res)=>{
    Book.findById(req.params.id, function(err, bookDetail){
        res.render("bookItem",{
            bookDetail
        })
    })
})
app.get("/bookStore", (req,res)=>{
    res.render("bookStore")
} )

app.post("/auth/users/login", loginUserController)
app.post("/auth/users/register",registerUserController)


