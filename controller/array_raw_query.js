// For array replacement, you pass the query() method with the SQL query and the configuration object. It contains the replacements value and type. To replacements, you pass data as an array and catch those values using the question mark (?) symbol.

// Next, since you need to get data about a specific student, the student_id is passed as the second parameter. After that, you pass the type: sequelize.QueryTypes.SELECT key-value pair, which you can use to select data from the database.

// There are some other types as well, such as QueryTypes.UPDATE and QueryTypes.DELETE. Depending on the requirement, you can select the type that suits your purpose.

// The following shows the full code block. Here you connect to the database and retrieve the selected student data using a raw query.

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "sample_student_db",
  "DATABASE_USERNAME",
  "DATABASE_PASSWORD",
  {
    host: "DATABASE_HOST",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

sequelize
  .query("SELECT * FROM students WHERE student_id = ?", {
    replacements: ["REPLACE_STUDENT_ID"],
    type: sequelize.QueryTypes.SELECT,
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Failed to insert data : ", error);
  });

//On the surface, object replacement is similar to array replacement, but the pattern of passing data to the raw query is different. In the replacement option, you pass data as an object, and in the query option, you use values like :key.

// To get started, create a new file called object_raw_query.js and paste the complete code blocks from the server.js file, updating the database to sample_student_db.

sequelize
  .query("SELECT * FROM students WHERE student_id = :id", {
    replacements: { id: "REPLACE_STUDENT_ID" },
    type: sequelize.QueryTypes.SELECT,
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Failed to insert data : ", error);
  });
