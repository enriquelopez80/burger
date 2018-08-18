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

router.post("/new/burgers", function(req, res) {

    console.log(req.body)

    let newBurger = {
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }

    burger.create(newBurger, function(result) {
        console.log('this is working')
        console.log(result)
        res.json({ id: result.id })
    })
})

router.put("/update/burger", function (req, res) {
    burger.update(req.body.id, function (result) {
        console.log("Put Working")
        res.json({ id: result.id });
    })
});









module.exports = router;