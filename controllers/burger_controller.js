const express = require("express");
const { end } = require("../config/connection");

const router = express.Router();

const burger = require("../models.js/burger");

router.get("/", (req, res) => {
  burger.all((data) => {
    const burgersData = {
      burgers: data,
    };
    console.log(burgersData);
    res.render("index", burgersData);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name", "devour"], [req.body.name, req.body.devour], (result) => {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.updte(
    {
      devour: req.body.devour,
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

module.exports = router;
