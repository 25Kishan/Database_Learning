var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"training"
});

//Employee Table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "INSERT INTO employee (name,emp_no,dept_id,join_date,end_date) VALUES ('AA BB','DD-20','1','2020-12-14','2021-06-14')";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("Employee Id"+result.insertId);
    });
});

