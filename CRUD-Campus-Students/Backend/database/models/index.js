// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require("./campus");
const Student = require("./student");

//************Creation of assosiations*******************//
Campus.hasMany(Student); //one campus to many students
Student.belongsTo(Campus); //one-to-one student to campus

module.exports = {
  Campus, Student,
};
