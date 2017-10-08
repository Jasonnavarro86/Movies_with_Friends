var mysql = require("mysql")

var connection;


if(process.env.JAWSDB_URL){

        connection = mysql.createConnection(JAWSDB_URL)
}else{
        connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "newMoviesDb"
        });
};

connection.connect(function(err){
        if(err){
           console.error("error connecting:" + err.stack);
        };

        console.log('connected as id ' + connection.threadId);
})

module.exports = connection;