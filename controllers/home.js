const Book = require("../models/book")
module.exports = (req,res)=>{
    Book.find({label:"Best Sellers"}, function(err, bookItems){
        // console.log("Best sellers:",bookItems)
        // console.log("/ session:"req.session)
        console.log("/ session.cart:",req.session.cart)
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
}