const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Louisiana1979!",
    database: "eatDemBurgersDB"
});

connection.connect((err) => {
    if (err) {
      console.error(`Error connecting to MySQL: ${err.stack}`);
      return;
    }
    console.log(`Connected to MySQL as id ${connection.threadId}`);
  });

module.exports = connection;