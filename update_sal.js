var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "training"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE Salary SET month='12',amount='10000',generated_date='2020-12-14' WHERE emp_id ='01'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Status"+result.serverStatus + "Id"+result.insertId);
  });
});