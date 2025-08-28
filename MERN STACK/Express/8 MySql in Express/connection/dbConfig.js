import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

async function myFun(){
  const con = mysql.createConnection({
      host:process.env.HOST,
      user : process.env.USER,
      password : process.env.PASSWORD,
      port : process.env.DB_PORT
  });
  return new Promise((resolve,reject)=>{
    var query = `select count(*) as exist from information_schema.tables where table_schema='${process.env.DB_NAME}'`;
    con.query(query,(error,result)=>{
      if(error) 
        reject(error);
      if(result[0].exist>0){
        con.changeUser({database:process.env.DB_NAME},(error)=>{
          if(error)
            reject(error);
        })
        resolve(con);
      }else
        resolve(con);
    });
  });
}

const res = await myFun();
export default res;











//--------------------------------------------------------

// async function myFun1() {
//   const con = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     port: process.env.DB_PORT
//   });

//   return new Promise((resolve, reject) => {
//     const query = `SELECT COUNT(*) AS exist FROM information_schema.tables WHERE table_schema='${process.env.DB_NAME}'`;

//     con.query(query, (error, result) => {
//       if (error) return reject(error);

//       if (result[0].exist > 0) {
//         con.changeUser({ database: process.env.DB_NAME }, (err) => {
//           if (err) return reject(err);
//           resolve(con);
//         });
//       } else {
//         resolve(con);
//       }
//     });
//   });
// }

// const res1 = await myFun1();
// export default res1;
