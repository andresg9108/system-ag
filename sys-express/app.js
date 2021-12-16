var oApp = {};

oApp.path = '';
oApp.port = 65000;
oApp.express = require('express');
oApp.http = require('http');
oApp.app = oApp.express();
oApp.server = oApp.http.Server(oApp.app);

oApp.setPath = (sPath) => {
	oApp.path = sPath;
}

oApp.run = () => {
	// oApp.app.use(oApp.express.static(oApp.path + '/web'));
	// oApp.app.use('/jquery', oApp.express.static(oApp.path + '/node_modules/jquery/dist/'));

	oApp.server.listen(oApp.port, () => {
		console.log('Port: ' + oApp.port);
	});
}

exports.run = oApp.run;
exports.setPath = oApp.setPath;