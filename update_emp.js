var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "training"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE employee SET emp_no='DD-21',dept_id='1',join_date='2020-12-14',end_date='2021-06-14' WHERE name ='AA BB'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Status"+result.serverStatus + "Id"+result.insertId);
  });
});