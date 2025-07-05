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
        var name = 'Jackson Jack';
        var email = 'jack@gmail.com';
        var address = 'Indore, Madhya Pradesh';
        var per = 45.56;
        const sqlQuery = "insert into student(sname,email,address,per) values('"+name+"','"+email+"','"+address+"',"+per+")";
        const values = [name,email,address,per];
        con.query(sqlQuery,values,(error,result)=>{
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