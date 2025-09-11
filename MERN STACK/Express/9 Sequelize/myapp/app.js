import express from 'express';
import { DataTypes, INTEGER, Sequelize } from 'sequelize';
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


}).catch((error) => {
    console.log("Error occured while dealing with table : ", error);
});

app.listen(3000, () => {
    console.log("Connection established successfully");
});