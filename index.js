const express = require("express")
const app = new express()
const ejs = require("ejs")
const bodyParser = require("body-parser")

const loginUserController = require("./controllers/loginUser")
const registerUserController = require("./controllers/registerUser")


const mongoose = require("mongoose")
const db = "mongodb+srv://vgulibrarydatabase2022:vgu2022@cluster0.4vlmc.mongodb.net/Tiktak?retryWrites=true&w=majority"
mongoose.connect(db)
        .then(()=>{console.log("Mongoose connected...")})
        .catch(err =>{console.log(err)})

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(4000, ()=>{
    console.log("Ok. App listen on port 4000")
})
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/auth/login", (req, res)=>{
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
app.get("/checkout",(req,res)=>{
    res.render("checkout")
})
app.get("/bookItem",(req,res)=>{
    res.render("bookItem")
})

app.post("/auth/users/login", loginUserController)
app.post("/auth/users/register",registerUserController)
