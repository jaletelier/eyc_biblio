const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const category = require('./app/controllers/category');
const document = require('./app/controllers/document');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));
app.locals.basedir = path.join(__dirname, '/app/views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.render('express-index');
});

app.get('/document',document.list);

app.get('/categories',category.list);
app.post('/categories',category.post)

app.listen( process.env.PORT || 3000,function(){
	console.log("Example app listening on port "+(process.env.PORT||3000));
});



require('./app/setup/sequelize');