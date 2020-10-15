const orm = require("../config/orm");

const burger = {
  read: (cb) => {
    orm.selectAll("dem_burgers", (result) => {
      cb(result);
    });
  },
  create: (col, val, cb) => {
    orm.insertOne("deb_burgers", col, val, (result) => {
      cb(result);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.updateOne("dem_burgers", objColVals, condition, (result) => {
      cb(result);
    });
  },
  delete: (condition, cb) => {
    orm.deleteOne("dem_burgers", condition, (result) => {
      cb(result);
    });
  },
};

module.exports = burger;
