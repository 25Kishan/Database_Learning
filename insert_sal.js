var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"training"
});

//Salary Table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "INSERT INTO Salary (emp_id,month,amount,generated_date) VALUES ('01','January','5679','2021-01-01')";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log(result.insertId);
    });
});
