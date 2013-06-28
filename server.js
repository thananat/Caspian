var express = require('express');
var app = express();

console.log("Initialized server at port 3000");
app.listen(3000);


app.use(express.bodyParser());

app.get('/', function(req, res){
    res.write("Hello world!");
});

app.post('/endpoint', function(req, res){
    console.log("Data received");
	console.log("Host: " + req.host);
    console.log('Body: ' + JSON.stringify(req.body));

	var data = {response:'json'};
	console.log("Responding with: " + JSON.stringify(data));

	res.send(data);
});

