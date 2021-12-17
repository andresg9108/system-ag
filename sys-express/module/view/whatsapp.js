var oApp = {};

oApp.app = {};

oApp.setApp = (Application) => {
	oApp.app = Application;
}

oApp.run = () => {
	oApp.app.get('/whatsapp/templates', (req, res) => {
		res.send(req.query);
	});
}

exports.setApp = oApp.setApp;
exports.run = oApp.run;