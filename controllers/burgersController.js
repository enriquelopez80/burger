const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.


router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    })
})













module.exports = router;