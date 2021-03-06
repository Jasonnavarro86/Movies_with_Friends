var connection = require("./connection.js")


function printQuestionMarks(num){

    var arr = [];

    for (var i = 0; i < num; i++) {
 
        arr.push("?");
    }

    return arr.toString();
}



function objToSql(ob){

    var arr = [];

    for (var key in ob) {

        var value = ob[key];

        if (Object.hasOwnProperty(ob, key)) {
           
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            
            arr.push(key + "=" + value);
        }
    }
        
    return arr.toString();
}


var orm = {

    selectAll : function(tableName, cb){

        var queryString = "SELECT * FROM " + tableName;

        connection.query(queryString, [], function(err, result){

            cb(result);
        })
    },

    create : function(tableName, col, vals, cb ){

        
            var queryString = "INSERT INTO " + tableName;

            queryString += " (";
            queryString += col.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";

            console.log(queryString);

            connection.query(queryString, vals, function(err, results){
                if(err){
                    throw err;
                }
                cb(results)
            })

    },

    update : function(tableName, objColVals, condition, cb){

        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result)
        });
    }
};

module.exports = orm;

