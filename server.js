const Sequelize = require("sequelize");
const sequelize = new Sequelize("hello_world_db", "roor", "", {
  host: "DATABASE_HOST",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
