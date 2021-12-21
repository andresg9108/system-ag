var oApp = {};

oApp.path = '';
oApp.port = 65000;
oApp.express = require('express');
oApp.http = require('http');
oApp.app = oApp.express();
oApp.server = oApp.http.Server(oApp.app);

oApp.whatsappView = require('./module/view/whatsapp.js');

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

oApp.services = () => {

	// GET, POST, DELETE, PUSH, PUT
	// GET: Se utiliza para realiza consultas (Select)
	// POST: Se utiliza para crear nuevos registros (Insert)
	// DELETE: Se utiliza para borrar un registro (Delete)
	// PUT: Se utiliza para actualizar total o parcialmente un registro existente (Update)
	// PATCH: Se utiliza para actualiza solo una pequeña parte de un registro existente (Update)
	
	oApp.app.get('/', (req, res) => {
		res.status(200).send("Application: SystemAG.");
		// res.send({'test': '¡Hello World!'});
	});

	oApp.whatsappView.setApp(oApp.app);
	oApp.whatsappView.load();
}

exports.setPath = oApp.setPath;
exports.run = oApp.run;
exports.services = oApp.services;