'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      salary: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      admission_date: {
        type: sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};
