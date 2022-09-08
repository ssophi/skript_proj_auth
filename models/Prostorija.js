'use strict'
const {
    Model
} = require ('sequelize');
const Masaza = require('./Masaza');
const Trening = require('./Trening');
module.exports = (sequelize, DataTypes) => {
    class Prostorija extends Model {
        static associate ({Masaza, Trening}) {
            this.hasMany(Masaza,{foreignKey: 'prostorijaId'})
            this.hasMany(Trening,{foreignKey: 'prostorijaId'})
        }
        
    };
    
    Prostorija.init({
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
        }
    }, {
        sequelize,
        modelName: 'Prostorija'
    });
    return Prostorija;
};