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

export default student;