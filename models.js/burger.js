const orm = require("../config/orm");

const burger = {
  read: (cb) => {
    orm.selectAll("dem_burgers", (result) => {
      cb(result);
    });
  },
  create: (cols, vals, cb) => {
    orm.insertOne("dem_burgers", cols, vals, (result) => {
      cb(result);
    });
  },
  update: (objColVals, conditions, cb) => {
    orm.updateOne("dem_burgers", objColVals, conditions, (result) => {
      cb(result);
    });
  },
  delete: (conditions, cb) => {
    orm.deleteOne("dem_burgers", conditions, (result) => {
      cb(result);
    });
  },
};

module.exports = burger;
