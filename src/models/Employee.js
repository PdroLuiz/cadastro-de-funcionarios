const { Model, DataTypes} = require('sequelize');

class Employee extends Model {
    
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            salary: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            admission_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        }, {
            sequelize,
            underscored: true
        });
    }

}


module.exports = Employee;