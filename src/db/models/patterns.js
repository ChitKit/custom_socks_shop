const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patterns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patterns.init({
    name: DataTypes.STRING,
    pat_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Patterns',
  });
  return Patterns;
};
