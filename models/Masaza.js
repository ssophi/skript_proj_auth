'use strict';
const {
    Model
} = require ('sequelize');
const Termin = require('./Termin');
const Prostorija = require('./Prostorija');
module.exports = (sequelize, DataTypes) => {
    class Masaza extends Model {
        static associate({Termin}) {
            this.hasMany(Termin,{ foreignKey:'masazaId'})
        }
        static associate({Prostorija}) {
            this.belongsTo(Prostorija, { foreignKey: 'prostorijaId', sourceKey: 'id'})
        }
        
    }

    Masaza.init({
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
        }
    }, {
        sequelize,
        modelName: 'Masaza'
    });
    return Masaza;
};