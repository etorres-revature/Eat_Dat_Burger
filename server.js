//importing dependencies
//express to create server
const express = require("express");
//express handlebars templating library
const exphbs = require("express-handlebars");
//importing the controller for server routes that are set up
const routes = require("./controllers/burger_controller");

//creating a variable containing the express function
const app = express();

//creating a dynamic port variable
//using the environment variable if running on Heroku OR 32487 if there's no environment variable
const PORT = process.env.PORT || 32487;

//setting the public file as the place for express to look for static information
app.use(express.static("public"));
//middle ware to take the information from the html body and use it as a JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//telling the server to use handlebars library and using the main file in views as the primary file to build
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//setting the handlebars library as the view engine
app.set("view engine", "handlebars");
//passing in the routes from the controller to the app/express variable/function
app.use(routes);

//turning on the server
app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
