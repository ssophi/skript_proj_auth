'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) =>{
        await queryInterface.createTable('Zaposlenis', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ime: {
                type: DataTypes.STRING,
                allowNull: false
            },
            prezime: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            tip: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
              },
              updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
              }
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable('Zaposlenis');
    }
};