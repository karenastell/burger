const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
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
  const burgerName = req.body.name;
  console.log(burgerName);

  burger.create(burgerName).then(() => {
    console.log("burger created");

    res.json(burgerName);
  });
});


router.put("/api/burgers/:id", (req, res) => {
  burgerID = req.params.id;
  burger.update(burgerID).then(() => {
    console.log("burger eaten");

    res.json("Burger Eaten");
  });
});

module.exports = router;
