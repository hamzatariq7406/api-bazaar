const { DataTypes, Model }=require('sequelize');
const sequelize = require('../config/database');

class BazaarType extends Model {}

BazaarType.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    categoryName: {
        type: DataTypes.STRING(128),
    },
    jsonContent: {
        type: DataTypes.STRING(128),
    }
  },
  {
    sequelize,
    schema: 'mv_bazaar',
    indexes: [],
    modelName: 'dynamic_content',
  },
);

export = BazaarType;
