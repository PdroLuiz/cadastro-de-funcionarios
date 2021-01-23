const Employee = require('../models/Employee');

module.exports = {
    async create({name, email, salary,admission_date}) {
        if (await Employee.findOne({where: {email}})) {
            throw {message: 'email already in use', status: 400};
        } else {
            const employee = await Employee.create({name, email, salary, admission_date});
            return employee;
        }
    }    ,

    async info(id) {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            throw {message: 'employee not found', status: 404};
        } else {
            return employee;
        }
    },

    async updateSalary(id, salary) {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            throw {message: 'employee not found', status: 404};
        } else {
            await employee.update({salary});
            return employee;
        }
    },

    async delete(id) {
        const employee = await Employee.findByPk(id);
        if (employee) {
            await employee.destroy();
        }
        return employee;
    },

    async showAll() {
        return Employee.findAll();
    }

};