'use strict'
const {
    Model
} = require ('sequelize');
const Myuser = require('./Myuser');
const Termin = require('./Termin');
module.exports = (sequelize, DataTypes) => {
    class Rezervacija extends Model {
        static associate({Myuser, Termin}) {
            this.belongsTo(Myuser,{ foreignKey: 'korisnikId', sourceKey: 'id'}),
            this.belongsTo(Termin,{ foreignKey: 'terminId', sourceKey: 'id'})
        }
    }

    Rezervacija.init({
        korisnikId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        terminId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    }, {
        sequelize
    });
    return Rezervacija;
};