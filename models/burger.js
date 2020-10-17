//importing dependencies for module - the ORM file
const orm = require("../config/orm");

//creating a burger Object
const burger = {
  //function to read all burgers from the dem_burgers table of the eatDemBurgersDB
  //passing in callback function
  read: (cb) => {
    //calling the selectAll() function form the ORM
    //passing in the table and results callback function
    orm.selectAll("dem_burgers", (result) => {
      //returning callback function to burger controller with results from model
      cb(result);
    });
  },
  //function to create a burger in the dem_burgers table of the eatDemBurgersDB
  create: (cols, vals, cb) => {
    //calling the insertOne() function from the ORM
    //passing in the table, columns, values, and results callback function
    orm.insertOne("dem_burgers", cols, vals, (result) => {
      //returning callback function to burger controller with results from model
      cb(result);
    });
  },
  //function to update a burger in the dem_burgers table of the eatDemBurgersDB (devour Boolean true/false)
  update: (objColVals, conditions, cb) => {
    //calling the updateOne() function from the ORM
    //passing in the table, object containing column values, WHERE condition and results callback function
    orm.updateOne("dem_burgers", objColVals, conditions, (result) => {
      //returning the callback function to burger controller with results from model
      cb(result);
    });
  },
  //function to delete a burger in the dem_burgers table of the eatDemBurgersDB
  delete: (conditions, cb) => {
    //calling the deleteOne() function from the ORM
    //passing in
    orm.deleteOne("dem_burgers", conditions, (result) => {
      //returning the callback function to burger controller with results form model
      cb(result);
    });
  },
};

//exporting the burger model for use throughout the application
module.exports = burger;
