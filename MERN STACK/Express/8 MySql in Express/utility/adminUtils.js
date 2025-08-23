import dotenv from 'dotenv';
import con from '../connection/dbConfig.js';
dotenv.config();
export const createAdminDatabase = (next)=>{
    try{
        const query = `select count(*) as exist from information_schema.tables where table_schema='${process.env.DB_NAME}' and table_name='${process.env.ADMIN_TABLE_NAME}'`;
        con.query(query,(error,result)=>{
            if(error){
                console.log("error while checking database and table");
                next(error);
            }
            //  console.log("Result : ",result);
            else if(result[0].exist>0){
                console.log("Database and ADMIN table already exist");
                next();
            }
            else{
                const query = `create database if not exists ${process.env.DB_NAME}`;
                con.query(query,(error,result)=>{
                    if(error){
                        console.log("error while creating database : "+error);
                        next(error);
                    }else{
                        const query = `use ${process.env.DB_NAME}`;
                        con.query(query,(error,result)=>{
                            if(error){
                                console.log("Error while selecting database");
                                next(error);
                            }else{
                               const query = `create table if not exists admin(email varchar(45) primary key,password varchar(45) not null)`;
                                con.query(query,(error,result)=>{
                                    if(error){
                                        console.log("Error while creating table : ",error);
                                        next(error);
                                    }else{
                                      console.log("Database and admin table created successfully");
                                      const query = `insert into admin(email,password) values('admin@gmail.com','admin@123')`;
                                      con.query(query,(error,result)=>{
                                        if(error){
                                            console.log("Error while inserting data into admin table");
                                            next(error);
                                        }else{
                                            console.log("Admin data inserted successfully");
                                            next();
                                        }
                                      });
                                    }
                                });
                            }
                        })
                    }
                });
            }
        });
    }catch(error){
        next(error);
    }    
}