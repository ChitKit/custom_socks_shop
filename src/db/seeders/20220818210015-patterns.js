module.exports = {
  async up(queryInterface, Sequelize) {
    const patList = [
      {
        name: 'Треугольники',
        pat_url: '/images/1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Круги',
        pat_url: '/images/2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Звездное небо',
        pat_url: '/images/3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Наука',
        pat_url: '/images/4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Patterns', patList, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
