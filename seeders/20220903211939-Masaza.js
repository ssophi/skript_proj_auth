'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Masazas', [{
      id: 1,
      tip: 'relax',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 2,
      tip: 'korektivna',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 3,
      tip: 'lice',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 4,
      tip: 'ledja',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 5,
      tip: 'sportska',
      masazerId: 5,
      prostorijaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Masazas', null, {});
  }
};
