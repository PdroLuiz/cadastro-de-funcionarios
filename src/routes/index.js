const { Router } = require('express');
const employeeRoute = require('./employeeRoute');


const routes = Router();

routes.use('/employee', employeeRoute);


module.exports = routes;