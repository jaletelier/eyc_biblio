const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.render('express-index');
});

app.listen(3000,function(){
	console.log("Example app listening on port 3000");
});

