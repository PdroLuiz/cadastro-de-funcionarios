const sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new sequelize(dbConfig);

const Employee = require('../src/models/Employee');

Employee.init(connection);

module.exports = connection;