var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var funct = require('./functions.js');
var insertData = require('./insertData.js');

app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());

app.post('/register', funct.register);
app.post('/getuser', funct.getUser);
app.post('/getvideos', funct.getVideos);
app.post('/getseconds', funct.getSeconds);
app.post('/updateseconds', funct.updateSeconds);
app.post('/getcomedians', funct.getComedians);
app.post('/getcomedian', funct.getComedian);
app.post('/getcomedianvideos', funct.getComedianVideos);

app.post('/insertuser', insertData.insertUser);
app.post('/insertvideo', insertData.insertVideo);
app.post('/insertcomedian', insertData.insertComedian);

app.get('/', function (req, res) {
  res.send('This is ComedyTv!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
