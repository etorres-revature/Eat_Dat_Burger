// TODO create the following
const connection = require("./connection");

function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(obj) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in obj) {
    let value = obj[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  // selectAll();
  all: (table, cb) => {
    const queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        return result.status(500).end();
      }
      cb(result);
    });
  },
  // insertOne();
  insertOne: (table, cols, vals, cb) => {
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        return result.status(500).end();
      }
      cb(result);
    });
  },

  updateOne: (table, objColVals, conditions, cb) => {
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += conditions;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        return result.status(500).end();
      }

      cb(result);
    });
  }
};

// updateOne();

module.exports = orm;
