const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burger_controller");

const app = express();

const PORT = process.env.PORT || 32487;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
