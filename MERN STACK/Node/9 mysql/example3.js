// example showing the concept of mysql

var mysql = require("mysql2");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});

con.connect((error)=>{
    if(error)
        console.log("Error : "+error);
    else
        console.log("Connection established successfully");
});