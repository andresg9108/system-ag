var oApp = {};

oApp.whatsappController = require('../controller/whatsapp/app.js');
oApp.app = {};

oApp.load = () => {
	oApp.app.get('/whatsapp/templates', (req, res) => {
		res.send(oApp.whatsappController.getTemplates(req.query));
	});
}

oApp.setApp = (Application) => {
	oApp.app = Application;
}

exports.setApp = oApp.setApp;
exports.load = oApp.load;