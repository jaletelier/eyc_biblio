module.exports = (sequelize, DataTypes) => {
  return sequelize.define("keyword", {
    keyword: {
      type: DataTypes.STRING, 
      allowNull:false, unique:true, 
      set(val){this.setDataValue('keyword', val.toLowerCase());}
    },
    language: DataTypes.STRING
  })
}

//Ideas: snowball (steamed versions)