const M = require('../setup/sequelize').M;
const moment = require('moment');
const _ = require('underscore');
const responseHelper = require('../helpers/responses').response;

module.exports = {
  list: function(req, res) {
    let locals = {};
    M.Document
      .findAll({
        include:{
          model: M.Category
        }
      })
      .then(documents => {
        locals.documents = documents;
        console.log(JSON.stringify(documents))
        res.render('document/list', locals);
      });
  },
  create: function(req, res) {
    let locals = {};
    M.Document
      .findAll()
      .then(documents => {
        locals.documents = documents;
        return M.Category.findAll();
      })
      .then(categories => {
        locals.categories = categories;
        console.log(JSON.stringify(categories))
        return M.Keyword.findAll();
      })
      .then(keywords => {
        locals.keywords = keywords;
        return M.Author.findAll();
      })
      .then(authors => {
        locals.authors = authors;
        locals.years = [];
        for (let y = moment().year(); y > 1900; y--) {
          locals.years.push(y);
        }
        res.render('document/create', locals);
      });
  },
  post: function(req, res) {
    let newDocument = {
      title: req.body.title,
      description: req.body.description,
      year: req.body.year,
      language: req.body.language,
    };
    console.log(newDocument);
    M.Document
      .create(newDocument)
      .then((d) => {
        newDocument = d;
        console.log('createdDoc:' + JSON.stringify(newDocument));
        console.log('ids to search: '+req.body.categories);
        return M.Category.findAll({
          where: {
            id: req.body.categories
          }
        });
      })
      .then((categories) => {
        console.log('Categories:' + JSON.stringify(categories));
        return newDocument.addCategory(categories);
      })
      .then((updatedDocument) => {
        newDocument = updatedDocument;
        console.log('Updated' + JSON.stringify(updatedDocument));
        res.redirect('/document');
      })
      .catch((err) => {
        if(err){
          console.log('err'+err);
        }
        res.redirect('/document');
      });
  }
}