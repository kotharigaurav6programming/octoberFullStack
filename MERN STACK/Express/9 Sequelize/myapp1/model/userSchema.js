import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/connection.js";
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
   console.log("Table created successfully");
}).catch((error) => {
    console.log("Error occured while dealing with table : ", error);
});

export default student;