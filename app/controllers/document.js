const M = require('../setup/sequelize');

module.exports = {
  list: function(req, res) {
    let locals = {};
    M.Document
      .findAll()
      .then(documents => {
        locals.documents = documents;
        return M.Category.findAll();
      })
      .then(categories => {
        locals.categories = categories;
        res.render('document/create', locals);
      });
  },
  post: function(req, res) {
    res.redirect('back');
  }
}