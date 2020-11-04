'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Object extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Object.init({
    plateNumber: DataTypes.STRING,
    sensorName: DataTypes.STRING,
    Humidity: DataTypes.STRING,
    Temperature: DataTypes.STRING,
    Heat: DataTypes.STRING,
    SensorValue: DataTypes.STRING,
    xValue: DataTypes.STRING,
    yValue: DataTypes.STRING,
    zValue: DataTypes.STRING,
    Status: DataTypes.STRING,
    Location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Object',
  });
  return Object;
};