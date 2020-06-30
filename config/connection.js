// Set up MySQL connection.
const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xsv6rj27xgnnqv8b",
    password: "yxw6rxwosye8zqlq",
    database: "fooakocmv2qlgkeu"
  });
};

// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;