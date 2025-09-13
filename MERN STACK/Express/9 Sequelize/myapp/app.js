import express from 'express';
import { DataTypes, Sequelize } from 'sequelize';
var app = express();

const sequelize = new Sequelize(
    'oct_seq',
    'root',
    'root',
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then(() => {
    console.log("Connection established successfully with database");
}).catch((error) => {
    console.log("Error occured while making connection : ", error);
});

const student = sequelize.define("student", {
    sid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        required: true
    },
    email: {
        type: DataTypes.STRING(45),
        required: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING(45),
        required: true
    },
    address: {
        type: DataTypes.STRING(45),
        required: true
    },
}, { tableName: "student" });

student.sequelize.sync().then(() => {
    // console.log("Table created successfully");
    /*
    var studentPayload = {
     name:"Peter Parker",
     email:"peter@gmail.com",
     password:"peter@123",
     address : "Indore Madhya Pradesh"
    }
    student.create(studentPayload).then(()=>{
         console.log("Data inserted successfully");
    }).catch((error)=>{
     console.log("Error while inserting data into database : ",error);
    });
     */

    /*
    var studentPayload = [{
        name: "Andrew Anderson",
        email: "andrew@gmail.com",
        password: "andrew@123",
        address: "Indore Madhya Pradesh"
    }, {
        name: "Jack Jackson",
        email: "jack@gmail.com",
        password: "jack@123",
        address: "Indore Madhya Pradesh"
    }, {
        name: "Simon Sim",
        email: "simon@gmail.com",
        password: "simon@123",
        address: "Indore Madhya Pradesh"
    }]

    student.bulkCreate(studentPayload).then(() => {
        console.log("Data inserted successfully");
    }).catch((error) => {
        console.log("Error while inserting data into database : ", error);
    });
    */

    /*
    student.findOne().then((result)=>{
        // console.log(result.get({plain:'text'}));
         console.table(result.dataValues);
    }).catch((error) => {
        console.log("Error while fetching data: ", error);
    });
    */

    /*
    student.findAll().then((result)=>{
        // console.log(result);
        for(var i=0;i<result.length;i++){
            //console.log(result[i].dataValues);
            console.table(result[i].dataValues);   
        }
    }).catch((error) => {
        console.log("Error while fetching data: ", error);
    });
    */

    /*
    student.findOne({
        where :{
            sid:1
        }
    }).then((result)=>{
         console.table(result.dataValues);
    }).catch((error) => {
        console.log("Error while fetching data: ", error);
    });
    */
/*
    student.destroy({
        where :{
            sid:1
        }
    }).then((result)=>{
        console.log("Data deleted successfully");
        
    }).catch((error) => {
        console.log("Error while deleting data: ", error);
    });
  */
 
    student.update({
        name:"Andy",
        address : "Indore Mp"
    },{
        where :{
            sid:3
        }
    }).then((result)=>{
         console.table("Data updated successfully");
    }).catch((error) => {
        console.log("Error while updating data: ", error);
    });
    
}).catch((error) => {
    console.log("Error occured while dealing with table : ", error);
});

app.listen(3000, () => {
    console.log("Connection established successfully");
});