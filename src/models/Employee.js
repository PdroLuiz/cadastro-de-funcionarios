const { Model, DataTypes} = require('sequelize');

class Employee extends Model {
    
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                auto_increment: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            salary: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }, {
            sequelize
        });
    }

}


module.exports = Employee;