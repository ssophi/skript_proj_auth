
const {
    Model
} = require ('sequelize');
const Termin = require('./Termin');
const Prostorija = require('./Prostorija');
module.exports = (sequelize, DataTypes) => {
    class Trening extends Model {
        static associate({Termin}) {
            this.hasMany(Termin, {foreignKey: 'treningId'})
        }
        static associate({Prostorija}) {
            this.belongsTo(Prostorija, {foreignKey: 'prostorijaId', sourceKey: 'id'})
        }

    }

    Trening.init({
        tip: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        trenerId: {
            type: DataTypes.INTEGER,
        },
        prostorijaId: {
            type: DataTypes.INTEGER,
        }        
    }, {
        sequelize,
        modelName: 'Trening'
    });
    return Trening;
};