const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Users, { foreignKey: 'user_id' });
      this.hasMany(models.Colors, { foreignKey: 'col_id' });
      this.hasMany(models.Patterns, { foreignKey: 'pattern_id' });
      this.hasMany(models.Images, { foreignKey: 'image_id' });

      // define association here
    }
  }
  Favorites.init({
    user_id: DataTypes.INTEGER,
    col_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};
