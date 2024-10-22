// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');
// const Category = require('./categoryModel');

// const Transaction = sequelize.define('Transaction', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   type: {
//     type: DataTypes.ENUM('income', 'expense'),
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   amount: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//   }
// });

// Transaction.belongsTo(Category, { foreignKey: 'category', targetKey: 'name' });

// module.exports = Transaction;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM('income', 'expense'),
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id',  // Reference the `id` field instead of `name`
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Transaction;

