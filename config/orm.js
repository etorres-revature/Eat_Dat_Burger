const connection = require("./connection");

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
  insertOne: (table, col, val, cb) => {
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += val;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, val, (err, result) => {
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
