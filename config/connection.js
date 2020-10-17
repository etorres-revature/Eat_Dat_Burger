//importing the mysql library
const mysql = require("mysql");

//creating a variable to hold the connection
let connection;

//if logic for what to put in the connection variable
if(process.env.JAWSDB_URL) {
  //if there is a JAWSDB_URL variable then use that to create the MySQL connection
  connection = mysql.createConnection(process.env.JAWSDB_URL);  
  //otherwise, use this information to create one on the localhost
  } else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Louisiana1979!",
    database: "eatDemBurgersDB"
    })
  }

//connect to MySQL
connection.connect((err) => {
    if (err) {
      console.error(`Error connecting to MySQL: ${err.stack}`);
      return;
    }
    console.log(`Connected to MySQL as id ${connection.threadId}`);
  });


//export this module
module.exports = connection;