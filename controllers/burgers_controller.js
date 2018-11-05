// Import Dependencies
const express = require("express");
const router = express.router;

// Import the model (burger.js) to use its databse functions
const burger = require("../models/burger");

// Create all our routes and setup logic within those routes where required

// Display all burgers
router.get("/", (req, res) => {
  burger.all = (data) => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  };
});

// Add new burger
router.post("/api/burgers", (req, res) => {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], (result) => {
    // Send back the ID of the new burger
    res.json({ id: SpeechRecognitionResult.insertId });
  });
});

router.put("/api/burgers/:id", (req,res) => {
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rews changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use
module.exports = router;
