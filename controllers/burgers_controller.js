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

module.exports = router;
