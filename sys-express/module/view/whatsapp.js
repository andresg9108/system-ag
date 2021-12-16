var oApp = {};

oApp.app = {};

oApp.setApp = (Application) => {
	oApp.app = Application;
}

oApp.run = () => {
	oApp.app.get('/whatsapp/test', (req, res) => {
		res.send({'test': '¡Hello World!'});
	});
}

exports.setApp = oApp.setApp;
exports.run = oApp.run;