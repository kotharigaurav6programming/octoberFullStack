import dotenv from 'dotenv';
import con from '../connection/dbConfig.js';
dotenv.config();
export const createToDoDatabase = (next)=>{
    try{
        const query = `select count(*) as exist from information_schema.tables where table_schema='${process.env.DB_NAME}' and table_name='${process.env.TODO_TABLE_NAME}'`;
        con.query(query,(error,result)=>{
            if(error){
                console.log("error while checking database and table");
                next(error);
            }
            //  console.log("Result : ",result);
            else if(result[0].exist>0){
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
                                const query = `create table if not exists todo(todoid int primary key auto_increment,userid int not null,description varchar(500) not null,priority int not null,date varchar(45) not null,time varchar(45) not null,status tinyint not null default 1,foreign key (userid) references user(userid) on delete cascade on update cascade)`;
                                con.query(query,(error,result)=>{
                                    if(error){
                                        console.log("Error while creating table : ",error);
                                        next(error);
                                    }else{
                                        console.log("Database and todo table created successfully");
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