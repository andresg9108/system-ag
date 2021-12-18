var oApp = {};

oApp.whatsappController = require('../controller/whatsapp/app.js');
oApp.app = {};

oApp.run = () => {
	oApp.app.get('/whatsapp/templates', (req, res) => {
		res.send(oApp.whatsappController.getTemplates(req.query));
	});
}

oApp.setApp = (Application) => {
	oApp.app = Application;
}

exports.setApp = oApp.setApp;
exports.run = oApp.run;