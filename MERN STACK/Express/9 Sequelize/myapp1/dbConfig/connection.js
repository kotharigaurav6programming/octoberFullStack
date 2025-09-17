import { Sequelize } from 'sequelize';

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
export default sequelize;