var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"training"
});
// Salary Table

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE Salary (id INT AUTO_INCREMENT PRIMARY KEY,emp_id INT,month varchar(05),amount float,generated_date date,FOREIGN KEY (emp_id) REFERENCES employee(id))";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("Salary Table Created");
    });
});