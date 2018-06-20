var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*app.get('/', function (req, res) {
	res.send('Hello node with Express');
})*/

var parser = bodyParser.urlencoded({ extended: false });

app.use(express.static('files'));

app.post('/handleform', parser, function(req, res) {
	var operaatio = req.body.operation;
	
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	
	if (operaatio === "yhteen") {
	var respdata = parseInt(req.body.firstnumber) + parseInt(req.body.secondnumber);
	respdata += "</body></html>"
	res.end(respdata);
	}
	if(operaatio === "miinus") {
	var respdata = parseInt(req.body.firstnumber) - parseInt(req.body.secondnumber);
	respdata += "</body></html>"
	res.end(respdata);
	}
	if(operaatio === "jaa") {
	var respdata = parseInt(req.body.firstnumber)/parseInt(req.body.secondnumber);
	respdata += "</body></html>"
	res.end(respdata);
	}
	if(operaatio === "kerro") {
	var respdata = parseInt(req.body.firstnumber)*parseInt(req.body.secondnumber);
	respdata += "</body></html>"
	res.end(respdata);
	}
	if(operaatio === "teetuhoa") {
	var respdata = (parseInt(req.body.firstnumber)*parseInt(req.body.secondnumber));
	respdata += "</body></html>"
	res.end(respdata);
	}
})

var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Now listening at http://%s:%s", host, port)
})
