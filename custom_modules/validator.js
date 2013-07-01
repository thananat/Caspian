var mysql = require('mysql');

function Validator() {
	var dbName = "PalmAccess";
	
	function getMatchedID(pincode,birthdate,callback) {
		// Establish connection with MySQL database
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'thananat',
			password: 'ts2548'
		});
		var loginTable = "LoginInfo";

		connection.query('USE ' + dbName);

		var query = 'SELECT * FROM ' + loginTable +' WHERE PinCode=? AND BirthDate=?;';		
		connection.query(query, [pincode,birthdate], function(err,rows,fields) {
			if (err) {
				console.error('Failed to query: ' + query);
				throw err;
			}
			var matchedID = [];
			for (var i=0; i<rows.length; i++) {
				matchedID.push(rows[i].ID);
			}
			
			// End connection and run callback function
			connection.end();
			callback(matchedID);
		});
	}

	return {
		getMatchedID: getMatchedID
	};
}

module.exports = Validator;
