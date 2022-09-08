'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) =>{
        await queryInterface.createTable('Masazas', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            tip: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            },
            masazerId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            prostorijaId: {
                type: DataTypes.INTEGER,
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
        await queryInterface.dropTable('Masazas');
    }
};