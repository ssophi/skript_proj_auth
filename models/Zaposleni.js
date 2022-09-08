'use strict'
const {
    Model
} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Zaposleni extends Model {
        static associate({Rezervacija, Masaza}) {
            this.hasMany(Rezervacija, {foreignKey: 'korisnikId'});
            this.hasMany(Masaza, {foreignKey: 'masazerId'})
        }

    }

    Zaposleni.init({
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
        }
    }, {
        sequelize,
        modelName: 'Zaposleni'
    });
    return Zaposleni;
};