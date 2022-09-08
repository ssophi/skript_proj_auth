'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Termins', [{
      id: 1,
      dan: 4,
      sati_od: 19,
      sati_do: 20,
      treningId: null,
      masazaId: 1,
      slobodna:1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 2,
      dan: 4,
      sati_od: 18,
      sati_do: 19,
      treningId: null,
      masazaId: 2,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 3,
      dan: 4,
      sati_od: 20,
      sati_do: 21,
      treningId: null,
      masazaId: 3,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 4,
      dan: 4,
      sati_od: 17,
      sati_do: 18,
      treningId: null,
      masazaId: 4,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 5,
      dan: 4,
      sati_od: 16,
      sati_do: 17,
      treningId: null,
      masazaId: 5,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 6,
      dan: 1,
      sati_od: 10,
      sati_do: 12,
      treningId: 1,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 7,
      dan: 1,
      sati_od: 18,
      sati_do: 19,
      treningId: 2,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 8,
      dan: 4,
      sati_od: 18,
      sati_do: 19,
      treningId: 2,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 9,
      dan: 2,
      sati_od: 10,
      sati_do: 12,
      treningId: 3,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 10,
      dan: 5,
      sati_od: 10,
      sati_do: 12,
      treningId: 3,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 11,
      dan: 2,
      sati_od: 16,
      sati_do: 18,
      treningId: 4,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 12,
      dan: 5,
      sati_od: 18,
      sati_do: 20,
      treningId: 4,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 13,
      dan: 6,
      sati_od: 7,
      sati_do: 8,
      treningId: 5,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: 14,
      dan: 7,
      sati_od: 8,
      sati_do: 9,
      treningId: 5,
      masazaId: null,
      slobodna:0,
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Termins', null, {});
  }
};
