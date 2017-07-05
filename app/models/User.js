module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    name: DataTypes.STRING,
    password_hash: DataTypes.TEXT,
    token: DataTypes.STRING,
  })
}


// Nombre
// HashedPas
// Token
//Roles