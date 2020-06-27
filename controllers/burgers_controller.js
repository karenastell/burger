const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  if (err) throw err;
  burger.view().then((data) => {
    const devoured = [];
    const notEaten = [];
    data.forEach((row) => {
      if (row.devoured === 1) {
        devoured.push(row);
      } else {
        notEaten.push(row);
      }
    });

    const burgerObject = {
      devoured: devoured,
      notEaten: notEaten,
    };

    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", (req, res) => {
  if (err) throw err;
  const burgerName = req.body.name;
  burger.create(burgerName).then(() => {
    res.json(`${burgerName} was added`);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  if (err) throw err;
  burgerID = req.params.id;
  burger.update(burgerID).then(() => {
    res.json("Burger Eaten");
  });
});

module.exports = router;
