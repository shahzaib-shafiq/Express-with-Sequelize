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

// Define the Book model
const Book = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATEONLY,
  },
  subject: {
    type: DataTypes.INTEGER,
  },
});

// Sync the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Book table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });
