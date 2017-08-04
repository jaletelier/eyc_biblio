const M = require('../setup/sequelize').M;
const responseHelper = require('../helpers/responses').response;

module.exports = {
  list: function(req, res) {
    M.Category.findAll().then(categories => {
      res.render('category/list', {
        categories
      });
    })
  },
  post: function(req, res) {
    M.Category
      .create(req.body)
      .then((d) => {
        responseHelper(req, res, null, d);
      }).catch((err) => {
        responseHelper(req, res, err, null);
      });
  }
}