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
        var name = 'Jackky';
        var email = 'jackky@gmail.com';
        var address = 'Indore';
        var per = 99.99;
        var nm= 'Jackson Jack';
        const sqlQuery = "update student set sname=?,email=?,address=?,per=? where sname=?";
        const values = [name,email,address,per,nm];
        con.query(sqlQuery,values,(error,result)=>{
            if(error)
                console.log("Error : "+error);
            else{
                console.log("Data updated successfully");
                console.log("Result : ",result);
            }
            con.close();
        });
    }
});