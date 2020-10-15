const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);  
  } else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Louisiana1979!",
    database: "eatDemBurgersDB"
    })
  }

connection.connect((err) => {
    if (err) {
      console.error(`Error connecting to MySQL: ${err.stack}`);
      return;
    }
    console.log(`Connected to MySQL as id ${connection.threadId}`);
  });

module.exports = connection;