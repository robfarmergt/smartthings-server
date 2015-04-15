var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/echo', function(request, response) {
  response.send(request.body);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
