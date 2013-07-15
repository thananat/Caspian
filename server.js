var express = require('express');
var validator = require('./custom_modules/validator');

//var app = express.createServer();
var app = express();

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

app.post('/validateSubmit', function(req, res){
    console.log("Data received");
	console.log("Host: " + req.host);
    console.log('Body: ' + JSON.stringify(req.body));

	var pincode = req.body.PIN;
	var birthdate = req.body.BDate;

	var v1 = validator();
	v1.getMatchedID(pincode,birthdate, function(result){
		var resData = {MatchedID: result, q: '4'};
		console.log("Responding with: " + JSON.stringify(resData));
		res.json(resData);
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Initialized server at port " + port);
});
