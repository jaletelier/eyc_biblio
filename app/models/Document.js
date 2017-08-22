module.exports = (sequelize, DataTypes) => {
  return sequelize.define("document", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    language: DataTypes.STRING,
    source: DataTypes.TEXT,
    uri: DataTypes.STRING
  })
}
