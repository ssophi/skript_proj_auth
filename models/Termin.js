'use strict'
const {
    Model
} = require ('sequelize');
const Masaza = require('./Masaza');
const Trening = require('./Trening');

module.exports = (sequelize, DataTypes) => {
    class Termin extends Model {
        static associate({Masaza, Trening}) {
            this.belongsTo(Masaza,{ foreignKey: 'masazaId', sourceKey: 'id'}),
            this.belongsTo(Trening,{ foreignKey: 'treningId', sourceKey: 'id'})
        }
        
    }

    Termin.init({
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
        }
        
    }, {
        sequelize,
        modelName: 'Termin'
    });
    return Termin;
};