const M = require('../setup/sequelize');

module.exports = {
  list: function(req, res) {
    M.Category.findAll().then(categories => {
      res.render('category/list', {categories});
    })
  },
  post: function(req, res) {
    M.Category.create(req.body).then(() => {
      res.redirect('back');
    })
}
}