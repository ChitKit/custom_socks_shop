module.exports = {
  async up(queryInterface, Sequelize) {
    const imgList = [
      {
        name: 'Кактус',
        img_url: '/images/pic1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Малыш Йода',
        img_url: '/images/pic2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Уточка',
        img_url: '/images/pic3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Альпака',
        img_url: '/images/pic4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Images', imgList, {});
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
