const { Sequelize, DataTypes } = require("sequelize");

// Create a new instance of Sequelize
const sequelize = new Sequelize(
  "hello_world_db", // Database name
  "DATABASE_USERNAME", // Your database username
  "DATABASE_PASSWORD", // Your database password
  {
    host: "DATABASE_HOST", // Your database host
    dialect: "mysql", // Dialect of the database
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize
  .sync()
  .then(() => {
    Book.findAll()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

sequelize
  .sync()
  .then(() => {
    Book.findOne({
      where: {
        id: "1",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Book table created successfully!");

    Book.create({
      title: "Clean Code",
      author: "Robert Cecil Martin",
      release_date: "2021-12-14",
      subject: 3,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Failed to create a new record : ", error);
      });
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

sequelize
  .sync()
  .then(() => {
    Book.destroy({
      where: {
        id: 2,
      },
    })
      .then(() => {
        console.log("Successfully deleted record.");
      })
      .catch((error) => {
        console.error("Failed to delete record : ", error);
      });
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
