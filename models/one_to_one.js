const Student = sequelize.define("students", {
  student_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Grade = sequelize.define("grades", {
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const grade_data = [{ grade: 9 }, { grade: 10 }, { grade: 11 }];

const student_data = [
  { name: "John Baker", gradeId: 2 },
  { name: "Max Butler", gradeId: 1 },
  { name: "Ryan Fisher", gradeId: 3 },
  { name: "Robert Gray", gradeId: 2 },
  { name: "Sam Lewis", gradeId: 1 },
];

sequelize
  .sync({ force: true })
  .then(() => {
    Grade.bulkCreate(grade_data, { validate: true })
      .then(() => {
        Student.bulkCreate(student_data, { validate: true })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    console.error("Unable to create the table : ", error);
  });

//   one-to-one relationship: A one-to-one relationship means a record in one table is associated with exactly one record in another table. In terms of Sequelize, you can use belongsTo() and hasOne() associations to create this type of relationship.

//   one-to-many relationship: A one-to-many relationship means a record in one table is associated with multiple records in another table. With Sequelize, you can use hasMany() associations methods to create this type of relationship.

//   many-to-many relationship: A many-to-many relationship means multiple records in one table are associated with multiple records in another table. With Sequelize, you can use belongsToMany() associations to create this type of relationship.

Student.belongsTo(Grade);

//finding student data using grade
sequelize
  .sync({ force: true })
  .then(() => {
    Grade.bulkCreate(grade_data, { validate: true })
      .then(() => {
        Student.bulkCreate(student_data, { validate: true })
          .then(() => {
            Student.findAll({
              include: [
                {
                  model: Grade,
                },
              ],
            })
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.error("Failed to retrieve data : ", error);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    console.error("Unable to create the table : ", error);
  });
