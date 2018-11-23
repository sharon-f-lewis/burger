// Import Dependencies
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its databse functions
const burger = require("../models/burger.js");

// Create all our routes and setup logic within those routes where required

// Display all burgers
router.get("/", function(req, res) {

  burger.selectAll(function(data) {

    const hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
  });
});

// Add new burger
router.post("/api/burgers", function(req, res) {

  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req,res) {

  const condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rews changed, then the ID must not exist, so 404
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use
module.exports = router;
