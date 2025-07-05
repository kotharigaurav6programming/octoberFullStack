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
    else{
        console.log("Connection established successfully");
        const sqlQuery = "create database if not exists evedb";
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error : "+error);
            else{
                if(result.warningStatus==1)
                 console.log("Database already exist");
                else
                console.log("Database created successfully");
            }
            con.close();
        });
    }
});