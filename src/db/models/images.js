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
      this.hasMany(models.Favorites, { foreignKey: 'image_id' });
      this.hasMany(models.Orders, { foreignKey: 'image_id' });
    }
  }
  Images.init({
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};
