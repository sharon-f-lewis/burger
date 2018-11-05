// Setup MYSQL connection and export

// Declare node dependency
const mysql = require("mysql");

// Configure the connection for JAWSDB if deployed otherwise local
let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  db = mysql.createConnection({
    host: 'localhost'
    ,port: 3306
    ,user: 'root'
    ,password: 'password'
    ,database: 'burgers_db'
  });
};

// Turns BOOLEAN 0s and 1s returned from the db into true and false
db.config.typeCast = (field, next) => {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

// Export the connection so it's available in other parts of the app
module.exports = db;