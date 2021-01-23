const { Router } = require('express');
const employeeController = require('../controllers/employeeController');

const employeeRoute = Router();

employeeRoute.post('/create', employeeController.create);

module.exports = employeeRoute;

