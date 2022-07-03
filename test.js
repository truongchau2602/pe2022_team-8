const express = require("express")
const app = new express()
app.listen(4005, ()=>{
    console.log("Ok. App listen on port 4005")
})
app.get("/", (req, res)=>{
    res.render("home")
})
