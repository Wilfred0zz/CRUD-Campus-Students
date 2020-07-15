//require sequelize and the database
const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
    firstName: { type: Sequelize.STRING,  allowNull: true},
    lastName: { type: Sequelize.STRING, allowNull: true},
    //Email attributes
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        //require a valid email
        validate: {isEmail: true},
    },
    //imageUrl requires default value
    imageUrl : {
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: "https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg",
        validate: {isUrl: true}
    },
    //gpa must be between 0.0 and 4.0
    gpa: {
        type: Sequelize.FLOAT,
        validate:{
            isFloat: true,
            min: 0.0,
            max: 4.0
        }
    },
}); 

module.exports = Student;