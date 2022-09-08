'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) =>{
        await queryInterface.createTable('Prostorijas', {
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
            broj_sale: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            povrsina: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            kapacitet: {
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
        await queryInterface.dropTable('Prostorijas');
    }
};