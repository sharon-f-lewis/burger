// Importy the ORM to create functions that will interact with the database
const orm = require("../config/orm");

// The variables cols and vals are arrays
const burger = {

  // All function will list all records from burgers table
  all: function(cols, cb) {
    orm.all('burgers', cols, function(res) {
      cb(res);
    });
  },

  // Create function will add new record to burgers table
  create: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // Update function will change an existing burger in the burgers table
  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export teh databse functions for the controller (burgersController.js).
module.exports = burger;