//importing dependencies for this module
//importing the express library
const express = require("express");
//importing the connection file from config folder for the end() function
const { end } = require("../config/connection");
//creating a variable to use the router function from the express library
const router = express.Router();
//importing the burger model
const burger = require("../models/burger");

//GET method to display all results on homepage when application loads
router.get("/", (req, res) => {
  //calling the read function in the burger model that uses the readAll() function from the ORM
  burger.read((data) => {
    //creating a burger object with the information returned from the model
    const burgersData = {
      burgers: data,
    };
    //logging the burger object to the console
    console.log(burgersData);
    //rendering the returned information in the appropriate view
    res.render("index", burgersData);
  });
});

//POST method create a new burger in the dem_burgers table of the eatDemBurgersDB
router.post("/api/burgers", (req, res) => {
  //calling the create function in the burger model that uses the insertOne() function from the ORM
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      //returning the id of the newly created burger entry
      res.json({ id: result.insertID });
    }
  );
});

//PUT method to update the devour Boolean in the dem_burgers table of the eatDemBurgersDB
router.put("/api/burgers/:id", (req, res) => {
  //creating a variable for the condition that takes in the id from the URL
  const condition = `id = ${req.params.id}`;

  //logging the condition variable value to the console
  console.log("condition", condition);

  //calling the update function in the burger model that uses the updateOne() function from the ORM
  burger.update(
    //passing in the objColVals object from the body
    {
      devoured: req.body.devoured,
    },
    //using the condition created above
    condition,
    //callback function that returns 404 if no rows changed, or ...
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      //returns a 200 and ends the connection
      res.status(200).end();
    }
  );
});

//DELETE method to delete a burger in the dem_burgers table of teh eatDemBurgersDB
router.delete("/api/burgers/:id", (req, res) => {
  //creating a variable for the condition that takes in the id from the URL
  let condition = `id = ${req.params.id}`;

  //logging the condition variable value to the console
  console.log("condition", condition);

  //calling the delete function in the burger model that uses the deleteOne() function from the ORM
  burger.delete(condition, (result) => {
    //callback function that returns 404 if no rows affected, or ..
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    //returns a 200 and ends the connection
    res.status(200).end();
  });
});

//export the controller as "router" for use in the rest of teh application
module.exports = router;
