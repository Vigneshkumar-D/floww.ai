// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const Category = sequelize.define('Category', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   type: {
//     type: DataTypes.ENUM('income', 'expense'),
//     allowNull: false,
//   }
// });

// module.exports = Category;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Add this line
  },
  type: {
    type: DataTypes.ENUM('income', 'expense'),
    allowNull: false,
  }
});

module.exports = Category;
