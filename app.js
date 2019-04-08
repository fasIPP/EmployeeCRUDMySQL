var express = require('express');
var mysql = require('mysql');

var app = express();

///
///	Create connection to MySQL database server.
/// 
function getMySQLConnection() {
	return mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'test'
	});
}

///
/// Use pug as templating engine. Pug is renamed jade.
///
app.set('view engine', 'pug');

///
/// HTTP Method	: GET
/// Endpoint 	: /person
/// 
/// To get collection of person saved in MySQL database.
///
app.get('/person', function(req, res) {
	var personList = [];

	// Connect to MySQL database.
	var connection = getMySQLConnection();
	connection.connect();

	// Do the query to get data.
	//TODO

	// Close the MySQL connection
	connection.end();
	
});

///
/// HTTP Method	: GET
/// Endpoint	: /person/:id
/// 
/// To get specific data of person based on their identifier.
///
app.get('/person/:id', function(req, res) {
	// Connect to MySQL database.
	var connection = getMySQLConnection();
	connection.connect();

	// Do the query to get data.
	//TODO

	// Close MySQL connection
	connection.end();
});

///
/// Start the app on port 300 
/// The endpoint should be: 
/// List/Index 	: http://localhost:3000/person
/// Details 	: http://localhost:3000/person/2
///
app.listen(3000, function () {
    console.log('listening on port', 3000);
});