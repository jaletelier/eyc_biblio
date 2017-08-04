const M = require('../setup/sequelize').M;
const responseHelper = require('../helpers/responses').response;

module.exports = {
  list: function(req, res) {
    M.Keyword.findAll().then(keywords => {
      res.render('keyword/list', {keywords});
    })
  },
  post: function(req, res) {
    console.log(req.get('Content-Type'));
    M.Keyword.create(req.body).then((d) => {
      responseHelper(req,res,null,d);
    }).catch((err)=>{
      console.log('Error creando! :S');
      responseHelper(req,res,err,null);
    });
  }
}