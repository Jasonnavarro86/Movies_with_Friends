var express = require("express")

var router = express.Router();

var movies = require("../models/moviedate.js");



router.get("/", function(req,res){
    res.redirect("/moviedates");
})

router.get("/moviedates", function(req,res){
 movies.selectAll(function(data){
  var moviedata = {
    movies: data 
  }
   res.render("index", moviedata);
 })
})





module.exports = router;