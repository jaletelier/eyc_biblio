const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));
app.locals.basedir = path.join(__dirname, '/app/views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.render('express-index');
});

app.get('/document',function(req,res){
  res.render('document/create');
});

app.listen( process.env.PORT || 3000,function(){
	console.log("Example app listening on port "+(process.env.PORT||3000));
});



require('./app/setup/sequelize');