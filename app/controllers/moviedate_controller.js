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
});


router.post("/newmovie", function(req, res){

    movies.create(
    [
        "movie_name", "watched"
    ],
    [
        req.body.name, req.body.watched
    ],
    function(result){
        res.json({ id: result.insertId });
    });

});


router.put("/newmovie/:id", function(req, res){
    var condition = "id = " + req.params.id;

    movies.update({
         watched: req.body.watched
    }, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});


module.exports = router;