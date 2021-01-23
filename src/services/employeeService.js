const Employee = require('../models/Employee');

module.exports = {
    async create({name, email, salary}) {
        if (await Employee.findOne({where: {email}})) throw {message: 'email already in use', status: 400};
        const employee = await Employee.create({name, email, salary});
        return employee;
    }    
};