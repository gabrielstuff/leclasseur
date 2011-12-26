var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

var port = process.env.PORT || 3000;
app.set('view engine', 'jade');
app.use(express.staticProvider(__dirname + '/public'));
app.listen(port, function() {
  console.log("Listening on " + port);
});