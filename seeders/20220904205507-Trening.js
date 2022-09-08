'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trenings', [{
     id: 1,
     tip: 'balet',
     trenerId: 1,
     prostorijaId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
     id: 2,
     tip: 'cross-fit',
     trenerId: 1,
     prostorijaId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      id: 3,
     tip: 'kick-box',
     trenerId: 3,
     prostorijaId: 3,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      id: 4,
     tip: 'penjanje',
     trenerId: 1,
     prostorijaId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      id: 5,
     tip: 'yoga',
     trenerId: 3,
     prostorijaId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
     }]);
 },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trenings', null, {});
  }
};
