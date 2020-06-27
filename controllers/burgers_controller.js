const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res)=>{
  burger.view().then((data)=>{
      res.render("index", data)
  })
})

module.exports = router;