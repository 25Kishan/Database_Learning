var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"training"
});

//Department Table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "INSERT INTO department (name,created_date) VALUES ('Engineer','2020-12-14')";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("Status"+result.serverStatus + "Id"+result.insertId);
    });
});
