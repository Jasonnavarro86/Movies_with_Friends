var orm = require("../config/orm.js");


var movies = {

    selectAll: function(cb){
        orm.selectAll("movies", function(res){

            cb(res);
        });
    },

    create: function(cols, vals, cb){

        orm.create('movies', cols, vals , function(res){
            cb(res);
        });
    },

    update: function(objColVal, condition, cb){

        orm.update('movies', onjColVal, condition, function(res){

            cb(res);
        });
    }
}

module.exports = movies;