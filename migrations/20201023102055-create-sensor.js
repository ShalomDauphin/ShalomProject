'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
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
    await queryInterface.dropTable('Sensors');
  }
};