const M = require('../setup/sequelize').M;
const responseHelper = require('../helpers/responses').response;

module.exports = {
  list: function(req, res) {
    M.Author.findAll().then(authors => {
      res.render('author/list', {
        authors
      });
    })
  },
  post: function(req, res) {
    M.Author
      .create(req.body)
      .then((d) => {
        responseHelper(req, res, null, d);
      }).catch((err) => {
        responseHelper(req, res, err, null);
      });
  }
}