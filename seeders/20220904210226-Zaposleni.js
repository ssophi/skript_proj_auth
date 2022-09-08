'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Zaposlenis', [{
    id: 1,
     username: 'nikolaus',
     password: 'malteze72',
     ime: 'Nikola',
     prezime: 'Nikic',
     email: 'nik@ari.com',
     tip: 'trener',
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
    id: 2,
    username: 'joca',
    password: 'badza123',
    ime: 'Jovan',
    prezime: 'Jovic',
    email: 'joca@ari.com',
    tip: 'recepcija',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    id: 3,
    username: 'maki',
    password: 'freja55',
    ime: 'Marija',
    prezime: 'Maric',
    email: 'maki@ari.com',
    tip: 'trener',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    id: 4,
    username: 'kimi',
    password: 'dorcol',
    ime: 'Mihajlo',
    prezime: 'mikic',
    email: 'kimi@ari.com',
    tip: 'vlasnik',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    id: 5,
    username: 'mimi',
    password: 'djura1920',
    ime: 'Mimi',
    prezime: 'Mimic',
    email: 'mimi@ari.com',
    tip: 'masaza',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    id: 6,
    username: 'enco',
    password: 'theboss',
    ime: 'Enco',
    prezime: 'Encic',
    email: 'enco@ari.com',
    tip: 'moderator',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    id: 7,
    username: 'ari',
    password: 'aritheboss',
    ime: 'Ari',
    prezime: 'Arica',
    email: 'ari@ari.com',
    tip: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Zaposlenis', null, {});
  }
};
