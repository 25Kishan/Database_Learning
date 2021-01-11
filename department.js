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
    var sql = "CREATE TABLE department (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(100),created_date date)";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("Department Table Created");
    });
});