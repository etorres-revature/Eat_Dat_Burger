const express = require("express");
const { end } = require("../config/connection");
const burger = require("../models.js/burger");
const router = express.Router();



router.get("/", (req, res) => {
  burger.read(data => {
    const burgersData = {
      burgers: data
    };
    console.log(burgersData);
    res.render("index", burgersData);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name", "devoured"], [req.body.burger, req.body.devour], (result) => {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition)

  burger.update(
    {
      devoured: req.body.devour,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete(condition, (req, res) =>{ 
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition)

  burger.delete(condition, result => {
    if(result.changed === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})

module.exports = router;
