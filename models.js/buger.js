const orm = require("../config/orm");

const burger = {
  all: (cb) => {
    orm.all("dem_burgers", (result) => {
      cb(result);
    });
  },
  create: (col, val, cb) => {
    orm.insertOne("dem_burgers", col, val, (result) => {
      cb(result);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.updateOne("dem_burgers", objColVals, condition, (result) => {
      cb(resilt);
    });
  },
};

module.exports = burger;
