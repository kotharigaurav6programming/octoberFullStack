import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const con = mysql.createConnection({
    host:process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    port : process.env.DB_PORT
});

var query = `select count(*) as exist from information_schema.tables where table_schema='${process.env.DB_NAME}'`

let conNew;
con.query(query,(error,result)=>{
    if(error)
        console.log("Error occured");
    else{
        if(result[0].exist>0){
            conNew = mysql.createConnection({
                host:process.env.HOST,
                user : process.env.USER,
                password : process.env.PASSWORD,
                database : process.env.DB_NAME,
                port : process.env.DB_PORT
            });
        }else
            conNew = con
    }
});

console.log("--------> "+conNew);

conNew.connect((error)=>{
    if(error)
        console.log("Error : ",error);
    else 
        console.log("Connection established successfully for database");
});

export default conNew;
//--------------------------------------------------------

// const mysql = require('mysql');

// // Initial connection without a database
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'your_password'
// });
// // Connect to the server
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL server.');

//   // Close the current connection
//   connection.end(() => {
//     console.log('Initial connection closed.');

//     // Create a new connection with the desired database
//     connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'your_password',
//       database: 'your_database_name'
//     });

//     connection.connect((err) => {
//       if (err) throw err;
//       console.log('Connected to the new database.');
//     });
//   });
// });
