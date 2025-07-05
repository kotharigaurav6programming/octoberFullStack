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
        // const sqlQuery = "insert into student(email,address,per,sname) values('andrew@gmail.com','indore',78.87,'Andrew Anderson')";
        // const sqlQuery = "insert into student(email,address,sname) values('peter@gmail.com','bhopal','Peter Parker')";
        const sqlQuery = "insert into student values(102,'mathew math','mathew@gmail.com','indore',76.32)";
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error : "+error);
            else{
                console.log("Data inserted successfully");
                console.log("Result : ",result);
            }
            con.close();
        });
    }
});