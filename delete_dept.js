var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "training"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM department WHERE name = 'Engineer'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Status"+result.serverStatus + "Id"+result.insertId);
  });
});