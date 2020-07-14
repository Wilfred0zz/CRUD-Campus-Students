const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: true },
  imageUrl: { 
    type: Sequelize.STRING, 
    allowNull: true,
    defaultValue: "https://media.istockphoto.com/vectors/joy-of-college-vector-silhouette-vector-id165762635?k=6&m=165762635&s=612x612&w=0&h=wHZ9BJlKve3NbZcD8RlTRyIAkmOUptiwQT0m0WSTc1A="
  },
  description: { type: Sequelize.STRING, allowNull: true },
});

module.exports = Campus;
