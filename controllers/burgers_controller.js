const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("working?");
})

module.exports = router;