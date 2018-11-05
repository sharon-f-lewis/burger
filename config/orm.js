// Import MYSQL connection
const db = require("../config/connection");

// Helper functions for SQL syntax.

// Helper: Build string of question marks
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  };

  return arr.toString();
};

// Helper: Convert object key/value pairs to SQL syntax
function objToSQL(ob) {
  let arr = [];

  // loop through the keys and push the key/value as string int arr
  for (let key in ob) {
    let value = ob[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `"${value}"`;
      };

      // add value to array
      arr.push(`${key} = ${value}`);
    };
  };

  // translate array of string to a single comma-separated string
  return arr.toString();
};


// Object for all our SQL statement functions
const orm = {

  // function to select all burgers in database
  selectAll: function (table, cols, cb) {

    // define query string
    const queryString = `SELECT ${cols.toString()} FROM ${table};`;
    console.log(queryString);

    // perform query
    db.query(queryString, function (err, result) {
      // if database err, report error
      if (err) throw err;
      // otherwise, send result in callback
      cb(result);
    });
  },

  // function to add new burger to database
  insertOne: function (table, cols, vals, cb) {

    // define query string
    const queryString = `INSERT INTO ${table} (${cols.toString()})
      VALUES (${printQuestionMraks(vals.length)})`;
    console.log(queryString);

    // perform query
    db.query(queryString, vals, function (err, result) {
      // if database err, report error
      if (err) throw err;
      // otherwise, send result in callback
      cb(result);
    });
  },

  // function to update one burger
  updateOne: function (table, objColVals, condition, cb) {
    const queryString = `UPDATE SET ${objToSQL(objColVals)}
      WHERE ${condition}`;
    console.log(queryString);

    db.query(queryString, function (err, result) {
      // if database err, report error
      if (err) throw err;
      // otherwise, send result in callback
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js)
module.exports = orm;
