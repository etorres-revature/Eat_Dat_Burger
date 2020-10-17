//importing the connection module for connecting to MySQL
const connection = require("./connection");

//helper function to convert the number of question marks to a string of that many question marks
function createMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//helper function to create an array of strings from passed in objects
function translateSql(obj) {
  let arr = [];

  //loop through the keys and push the key/value as a string into arr variable
  for (let key in obj) {
    let value = obj[key];
    //check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      //if string has spaces, include them in the string
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `"${value}"`;
      }
      //push the resulting string with the key and value onto arr
      arr.push(`${key}=${value}`);
    }
  }
  console.log(arr);
  return arr.toString();
}

//creating the variable for the object representational mapper (ORM)
const orm = {
  // selectAll();
  selectAll: (table, cb) => {
    //query string for this function to pull from model
    const queryString = `SELECT * FROM ${table};`;

    //logging the query string to the console
    console.log(queryString);

    //calling the MySQL connection to pass the query
    connection.query(queryString, (err, result) => {
      //error handling
      if (err) {
        throw err;
      }
      //callback function to return to burger controller
      cb(result);
    });
  },

  // insertOne();
  insertOne: (table, cols, vals, cb) => {
    //creating the query string to bring to model
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += createMarks(vals.length);
    queryString += ") ";

    //logging the query string to the console
    console.log(queryString);

    //calling the connection to MySQL to pass the query
    connection.query(queryString, vals, (err, result) => {
      //error handling
      if (err) {
        throw err;
      }
      //callback function to return to the burger controller
      cb(result);
    });
  },

  // updateOne();
  updateOne: (table, objColVals, conditions, cb) => {
    //creating the query string to bring to the model
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += translateSql(objColVals);
    queryString += " WHERE ";
    queryString += conditions;

    //logging the query string to the console
    console.log(queryString);

    //calling the connection to MySQL to pass the query
    connection.query(queryString, (err, result) => {
      //error handling
      if (err) {
        throw err;
      }

      //callback function to return to the burger controller
      cb(result);
    });
  },

  //deleteOn();
  deleteOne: (table, conditions, cb) => {
    //creating the query string to bring to the model
    let queryString = `DELETE FROM ${table}`;

    queryString += " WHERE ";
    queryString += conditions;

    //logging the query string to the console
    console.log(queryString);

    //calling the connection to MySQL to pass the query
    connection.query(queryString, (err, result) => {
      //error handling
      if (err) {
        throw err;
      }

      //callback function to return to the burger controller
      cb(result);
    });
  },
};

//exporting the ORM for use in the application
module.exports = orm;
