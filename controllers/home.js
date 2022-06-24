const Book = require("../models/book")
module.exports = (req,res)=>{
    Book.find({label:"Best Sellers"}, function(err, bookItems){
        // console.log("Best sellers:",bookItems)
        console.log(req.session)
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