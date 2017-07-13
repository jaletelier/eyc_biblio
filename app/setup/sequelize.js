const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://axwaidfacvuanm:1d09701d6bfee87f7cf5bc2d02b94e252ff22468e96ff719f0c3dd4ae1f39d1e@ec2-54-221-254-72.compute-1.amazonaws.com:5432/daf9c86cabbei', {
  logging: false,
  dialectOptions: {
    ssl: true
  }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const M = require('../models')(sequelize);


M.Category.sync({force: true});
M.Document.sync({force: true});
M.Keyword.sync({force: true});
M.Author.sync({force: true});

M.Keyword.belongsToMany(M.Document,{through: 'DocumentKeyword'});
M.Author.belongsToMany(M.Document,{through: 'DocumentKeyword'});
M.Category.belongsToMany(M.Document,{through: 'DocumentKeyword'});


module.exports = M;