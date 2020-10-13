const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");
const routes = require("./controllers/burger_controller");

const app = express();

const PORT = process.env.PORT || 32487;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view enginge", "handlebars");
app.use(routes);

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL: ${err.stack}`);
    return;
  }
  console.log(`Connected to MySQL as id ${connection.threadId}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on: https://localhost:${PORT}`);
});
