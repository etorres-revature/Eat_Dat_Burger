const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./lib/assets/js");

const app = express();

const PORT = process.env.PORT || 32487;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view enginge", "handlebars");

connection.connect(err => {
    if (err) {console.error(`Error connecting to MySQL: ${err.stack}`);
    return;
}
console.log(`Connected to MySQL as id ${connection.threadId}`)
})

app.listen(PORT, () => {
    console.log(`Server is listening on: https://localhost:${PORT}`)
})