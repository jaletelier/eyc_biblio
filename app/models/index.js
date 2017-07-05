let models = null;
module.exports = function(sequelize) {
  if(models!=null) return models;
  models = {};
  var normalizedPath = require("path").join(__dirname);
  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    let name = file.split('.')[0];
    if (name != 'index') {
      models[name]=sequelize.import('./' + file);
    }
  });
  return models;
};