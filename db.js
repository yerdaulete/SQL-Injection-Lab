const mysql = require("mysql2");

var db = mysql.createConnection({
  host: "localhost",
  database: "resume",
  user: "root",
  password: "Yerdaulet05",
});

module.exports = db;
