module.exports = {
  async up(queryInterface, Sequelize) {
    const colLost = [
      {
        name: 'Белый',
        col_url: '#ffffff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Черный',
        col_url: '#3D3D3D',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'фиолетовый',
        col_url: '#4520ab',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Розовый',
        col_url: '#fc0fc0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Изумрудный',
        col_url: '#50c878',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Синий',
        col_url: '#0221d6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Colors', colLost, {});
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
