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
        var sid= 101;
        const sqlQuery = "delete from student where sid=?";
        const value = [sid];
        con.query(sqlQuery,value,(error,result)=>{
            if(error)
                console.log("Error : "+error);
            else{
                console.log("Data deleted successfully");
                console.log("Result : ",result);
            }
            con.close();
        });
    }
});