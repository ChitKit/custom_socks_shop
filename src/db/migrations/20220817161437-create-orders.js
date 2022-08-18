module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      col_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        },
      },
      pattern_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patterns',
          key: 'id',
        },
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Images',
          key: 'id',
        },
      },
      complete: {
        type: Sequelize.BOOLEAN,
      },
      sending: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
