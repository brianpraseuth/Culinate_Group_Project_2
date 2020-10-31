// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ze8k5sevvrgnhz3k",
  password: "nh1lsni1p8duua5h",
  database: "	d05wo8ltmn7eekjc"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;