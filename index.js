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

const Book = require("./models/book")
app.get("/",(req,res)=>{
    Book.find({label:"Best Sellers"}, function(err, bookItems){
        console.log("Best sellers:",bookItems)
        if(err){
            console.log(err)
        }
        res.render("home",{
            bestsellers:bookItems
        })
    })
    // console.log(req.session)
    // res.render("home",{
    //     bestsellers
    // })
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/auth/login", (req, res)=>{
    // res.send("redirect to login")
    res.render("login")
})
app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/register", (req,res)=>{
    res.render("register")
})
app.get("/auth/register", (req, res)=>{
    res.render("register")
})
app.get("/checkout", authMiddleware, (req,res)=>{
    console.log("invoke in controller")
    res.render("checkout")
    // if(req.session.userId){
    //     return res.render("checkout")
    // }
    // res.redirect("/auth/login")
})
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


