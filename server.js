// Dependencies 
var express = require("express")

var bodyParser = require("body-parser")

var methodOverride = require("method-override")



var PORT = process.env.PORT || 8248

// Set express server.
var app = express();


// Middleware
app.use(express.static(process.cwd() + "/public"))

app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"))

// Set up handlebars.
var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main"}))

app.set("view engine", "handlebars")


// Set routes

var routes = require("./app/controllers/moviedate_controller.js")

app.use("/", routes);


app.listen(PORT, function(){
    console.log("App running on PORT " + PORT);
})

