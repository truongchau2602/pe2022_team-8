const express = require("express")
const app = new express()
const ejs = require("ejs")


app.set("view engine", "ejs")

app.use(express.static("public"))

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
app.get("/checkout",(req,res)=>{
    res.render("checkout")
})
app.get("/bookItem",(req,res)=>{
    res.render("bookItem")
})