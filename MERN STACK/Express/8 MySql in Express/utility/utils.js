import dotenv from 'dotenv';
import con from '../connection/dbConfig.js';
dotenv.config();
export const createDatabase = (next)=>{
    try{
        const query = `select count(*) as exist from information_schema.tables where table_schema='${process.env.DB_NAME}' and table_name='${process.env.TABLE_NAME}'`;
        con.query(query,(error,result)=>{
            if(error){
                console.log("error while checking database and table");
                next(error);
            }
            //  console.log("Result : ",result);
            else if(result[0].exit>0){
                console.log("Database and table already exist");
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
                                const query = `create table if not exists user(userid int primary key auto_increment,username varchar(45) not null,email varchar(45) not null,password varchar(45) not null,address varchar(45) not null)`;
                                con.query(query,(error,result)=>{
                                    if(error){
                                        console.log("Error while creating table : ",error);
                                        next(error);
                                    }else{
                                        console.log("Database and table created successfully");
                                        next();
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