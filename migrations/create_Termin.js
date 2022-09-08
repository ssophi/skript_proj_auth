'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) =>{
        await queryInterface.createTable('Termins', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            dan: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            sati_od: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            sati_do: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            treningId: {
                type: DataTypes.INTEGER,
            },
            masazaId: {
                type: DataTypes.INTEGER,
            },
            slobodna: {
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
        await queryInterface.dropTable('Termins');
    }
};