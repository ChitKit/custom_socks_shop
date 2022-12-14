const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Favorites, { foreignKey: 'col_id' });
      this.hasMany(models.Orders, { foreignKey: 'col_id' });
    }
  }
  Colors.init({
    name: DataTypes.STRING,
    col_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Colors',
  });
  return Colors;
};
