'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) =>{
        await queryInterface.createTable('Trenings', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            tip: {
                type: DataTypes.STRING,
                defaultValue: null
            },
            trenerId: {
                type: DataTypes.INTEGER,
            },
            prostorijaId: {
                type: DataTypes.INTEGER,
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
        await queryInterface.dropTable('Trenings');
    }
};