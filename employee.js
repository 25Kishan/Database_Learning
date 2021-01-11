var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"training"
});

// Employee Table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY,name varchar(100),emp_no varchar(50),dept_id INT,join_date date,end_date date,FOREIGN KEY (dept_id) REFERENCES department(id))";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("Employee Table Created");
    });
});