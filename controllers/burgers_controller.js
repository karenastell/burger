const express = require("express");
const burger = require("../models/burger");
const router = express.Router();


// a get request is made to use the orm function, view, to view all the burgers
router.get("/", (req, res) => {
  burger.view().then((data) => {
      // the burgers are sorted into different arrays depending on if they have been devoured or not
    const devoured = [];
    const notEaten = [];
    data.forEach((row) => {
      if (row.devoured === 1) {
        devoured.push(row);
      } else {
        notEaten.push(row);
      }
    });

    // the arrays are put into an ojbet

    const burgerObject = {
      devoured: devoured,
      notEaten: notEaten,
    };

    // that object is used in rendering the index.handlebars page
    res.render("index", burgerObject);
  });
});


// a post request is made to use the orm function, create, to post a new burger
router.post("/api/burgers", (req, res) => {
    // the burger name is received through req.body.name
  const burgerName = req.body.name;
  console.log(burgerName);

  // that name is passed into the function to be used by the mysql syntax to add a new burger
  burger.create(burgerName).then(() => {
    console.log("burger created");
    res.json(burgerName);
  });
});


// a put request is made to the orm function, update, to update a burger's devoured state to true
router.put("/api/burgers/:id", (req, res) => {
    // the id is received through the params
  burgerID = req.params.id;
  console.log("burgerID", burgerID);
  
  // that id is passed into the function
  burger.update(burgerID).then(() => {
    console.log("burger eaten");
    res.json(burgerID);
  });
});

module.exports = router;
