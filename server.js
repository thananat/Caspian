var express = require('express');
var app = express.createServer(express.logger());
//var app = express();

console.log("Initialized server at port 3000");
app.listen(3000);


app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.send("Hello world!");
});

app.get('/endpoint', function(req, res) {
	console.log("GET Received by server");
	res.contentType('text/plain');
	res.send("GET received...");
});

app.post('/endpoint', function(req, res){
    console.log("Data received");
	console.log("Host: " + req.host);
    console.log('Body: ' + JSON.stringify(req.body));

	console.log("Responding with: " + JSON.stringify(req.body));
	res.json(req.body);

//	res.send({name: 'Thananat Jitapunkul', age: '25'});
});

