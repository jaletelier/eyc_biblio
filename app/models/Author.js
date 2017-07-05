module.exports = (sequelize, DataTypes) => {
  return sequelize.define("author", {
    name: DataTypes.STRING,
  })
}