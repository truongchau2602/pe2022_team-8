module.exports = (req,res)=>{
    if(loggedIn==null){
        console.log("user already loggin")
        return res.render("checkout")
    }
    res.render("checkout")
    
    // if(req.session.userId){
    //     return res.render("checkout")
    // }
    // res.redirect("/auth/login")
}