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
        const sqlQuery = "create table if not exists student (sid int primary key auto_increment,sname varchar(45) not null, email varchar(45) not null , address varchar(45) not null, per double not null default 0)";
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error : "+error);
            else{
                console.log("Table created successfully");
                console.log("Result : ",result);
            }
            con.close();
        });
    }
});