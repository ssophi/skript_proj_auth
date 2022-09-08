'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) =>{
        await queryInterface.createTable('Rezervacijas', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            korisnikId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            terminId: {
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
        await queryInterface.dropTable('Rezervacijas');
    }
};