'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Objects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plateNumber: {
        type: Sequelize.STRING
      },
      sensorName: {
        type: Sequelize.STRING
      },
      Humidity: {
        type: Sequelize.STRING
      },
      Temperature: {
        type: Sequelize.STRING
      },
      Heat: {
        type: Sequelize.STRING
      },
      SensorValue: {
        type: Sequelize.STRING
      },
      xValue: {
        type: Sequelize.STRING
      },
      yValue: {
        type: Sequelize.STRING
      },
      zValue: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.STRING
      },
      Location: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Objects');
  }
};