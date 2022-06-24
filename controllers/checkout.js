module.exports = (req,res)=>{
    console.log("invoke in controller")
    res.render("checkout")
    // if(req.session.userId){
    //     return res.render("checkout")
    // }
    // res.redirect("/auth/login")
}