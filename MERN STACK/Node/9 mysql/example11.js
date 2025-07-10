// example showing the concept of mysql

var mysql = require("mysql2");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"evedb"
});

con.connect((error)=>{
    if(error)
        console.log("Error : "+error);
    else{
        console.log("Connection established successfully");
        const sqlQuery = "select * from student";
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error : "+error);
            else{
                // console.log("Result : ",result);
                console.table(result);
            }
            con.close();
        });
    }
});