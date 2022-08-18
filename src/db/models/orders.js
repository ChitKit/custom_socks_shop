const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    col_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN,
    sending: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
