const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://axwaidfacvuanm:1d09701d6bfee87f7cf5bc2d02b94e252ff22468e96ff719f0c3dd4ae1f39d1e@ec2-54-221-254-72.compute-1.amazonaws.com:5432/daf9c86cabbei', {
  logging: false,
  dialectOptions: {
    ssl: true
  }
});

const M = require('../models')(sequelize);

M.Keyword.belongsToMany(M.Document,{through: 'DocumentKeyword'});
M.Author.belongsToMany(M.Document,{through: 'DocumentAuthor'});
M.Category.belongsToMany(M.Document,{through: 'DocumentCategory'});
M.Document.belongsToMany(M.Category,{through: 'DocumentCategory'});

M.Category.sync({force: false});
M.Document.sync({force: true});
M.Keyword.sync({force: true});
M.Author.sync({force: true});

sequelize.sync();


module.exports = {
  sequelize,
  M
}