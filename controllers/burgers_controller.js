const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burger.view().then((data) => {
    const devoured = [];
    const notEaten = [];
    data.forEach((row) => {
      if (devoured === true) {
        devoured.push(row);
      } else {
        notEaten.push(row);
      }
    });
    console.log(devoured);
    console.log(notEaten);
    
    const burgerObject = {
        devoured: devoured,
        notEaten: notEaten
    }

    res.render("index", burgerObject);
  });
});

module.exports = router;
