const { Router } = require('express');
const employeeController = require('../controllers/employeeController');

const employeeRoute = Router();

employeeRoute.post('/create', employeeController.create);
employeeRoute.delete('/:id/delete', employeeController.delete);
employeeRoute.get('/showall', employeeController.showAll);
employeeRoute.get('/:id/info', employeeController.info);
employeeRoute.put('/:id/updatesalary', employeeController.updateSalary);

module.exports = employeeRoute;

