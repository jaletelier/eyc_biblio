module.exports = (sequelize, DataTypes) => {
  return sequelize.define("keyword", {
    keyword: DataTypes.STRING,
    language: DataTypes.STRING
  })
}

//Ideas: snowball (steamed versions)