var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "giantoz29@gmail.com",
  password: "@Giant022"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});