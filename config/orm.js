const connection = require("./connection");

function createMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(obj) {
  let arr = [];
  for (let key in obj) {
    let value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `${value}`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
}

const orm = {
  // selectAll();
  selectAll: (table, cb) => {
    const queryString = `SELECT * FROM ${table};`;
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
    queryString += createMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, val, (err, result) => {
      if (err) {
        return result.status(500).end();
      }
      cb(result);
    });
  },
  // updateOne();
  updateOne: (table, objColVals, conditions, cb) => {
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += translateSql(objColVals);
    queryString += " WHERE ";
    queryString += conditions;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        return result.status(500).end();
      }

      cb(result);
    });
  },
  //deleteOn();
  deleteOne: (table, conditions, cb) => {
    let queryString = `DELETE FROM ${table}`;

    queryString += " WHERE ";
    queryString += conditions;

    connection.query(queryString, (err, result) => {
      if (err) {
        return result.status(500).end();
      }

      cb(result);
    });
  },
};

module.exports = orm;
