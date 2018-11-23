// Importy the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

// The variables cols and vals are arrays
const burger = {

  // All function will list all records from burgers table
  selectAll: function(cb) {

    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // Create function will add new record to burgers table
  insertOne: function(cols, vals, cb) {

    orm.insertOne("burgers", cols, vals, function(res) {

      cb(res);
    });
  },

  // Update function will change an existing burger in the burgers table
  updateOne: function(objColVals, condition, cb) {

    orm.updateOne("burgers", objColVals, condition, function(res) {
      
      cb(res);
    });
  }
};

// Export teh databse functions for the controller (burgersController.js).
module.exports = burger;