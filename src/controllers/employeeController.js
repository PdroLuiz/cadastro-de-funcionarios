const { ValidationErrorItem } = require('sequelize');
const { verifica } = require('../services/appService');

const employeeService = require('../services/employeeService');


module.exports = {
    async create(req, res) {
        try {
            const {name, email, salary} = verifica(req.body, ['name', 'email', 'salary']);
            const employee = employeeService.create({name, email, salary});
            return res.status(201).send(employee);
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    }
}