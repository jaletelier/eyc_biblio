const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const author = require('./app/controllers/author');
const keyword = require('./app/controllers/keyword');
const category = require('./app/controllers/category');
const document = require('./app/controllers/document');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));
app.locals.basedir = path.join(__dirname, '/app/views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.render('express-index');
});

app.get('/document', document.list);
app.get('/document/create', document.create);
app.post('/document', document.post)

app.get('/category', category.list);
app.post('/category', category.post)

app.get('/keyword', keyword.list);
app.post('/keyword', keyword.post)

app.get('/author', author.list);
app.post('/author', author.post)



require('./app/setup/sequelize').sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(process.env.PORT || 3000, function() {
      console.log("Iguales app listening on port " + (process.env.PORT || 3000));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });;