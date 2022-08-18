const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Favorites, { foreignKey: 'image_id' });
      this.belongsTo(models.Orders, { foreignKey: 'image_id' });
    }
  }
  Images.init({
    img_url: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};
