const { verifica } = require('../services/appService');

const employeeService = require('../services/employeeService');


module.exports = {
    async create(req, res) {
        try {
            const {name, email, salary, admission_date} = verifica(req.body, ['name', 'email', 'salary', 'admission_date']);
            const employee = await employeeService.create({name, email, salary, admission_date});
            return res.status(201).send(employee);
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },


    async info(req, res) {
        try {
            const { id } = verifica(req.params, ['id']);
            const employee = await employeeService.info(id);
            return res.status(200).send(employee);
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async updateSalary(req, res) {
        try {
            const { id } = verifica(req.params, ['id']);
            const { salary } = verifica(req.body, ['salary']);
            const employee = await employeeService.updateSalary(id, salary);
            return res.status(200).send(employee);
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = verifica(req.params, ['id']);
            const employee = await employeeService.delete(id);
            return res.status(employee ? 200 : 204).send();
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async showAll(req, res) {
        try {
            const employees = await employeeService.showAll();
            return res.status(200).send(employees);
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