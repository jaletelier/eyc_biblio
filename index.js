const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.send('Hello word!');
});

app.listen(3000,function(){
	console.log("Example app listening on port 3000");
});

