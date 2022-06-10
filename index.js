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

app.get("/auth/login", (req, res)=>{
    res.render("login")
})