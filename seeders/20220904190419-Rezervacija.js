'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rezervacijas', [{
      id: 1,
      korisnikId: 3,
      terminId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 2,
      korisnikId: 1,
      terminId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 3,
      korisnikId: 3,
      terminId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 4,
      korisnikId: 1,
      terminId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 5,
      korisnikId: 3,
      terminId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rezervacijas', null, {});
  }
};
