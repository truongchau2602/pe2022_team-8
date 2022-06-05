const mongoose = require("mongoose");
var GenreSchema = Schema ({
    name: { type: String, required: true},
  });
  
//   GenreSchema
//   .virtual('url')
//   .get(function (){
//     return '/catalog/genre/' + this._id;
//   });
module.exports = mongoose.model("Genre", genreSchema);