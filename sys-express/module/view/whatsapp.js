var oApp = {};

oApp.whatsappController = require('../controller/whatsapp/app.js');
oApp.app = {};

oApp.load = () => {
	oApp.app.put('/whatsapp/edit', (req, res) => {
		res.send(oApp.whatsappController.edit(req.body));
	});

	oApp.app.post('/whatsapp/send', (req, res) => {
		res.send(oApp.whatsappController.send(req.body));
	});

	oApp.app.post('/whatsapp/sendMessage', (req, res) => {
		res.send(oApp.whatsappController.sendMessage(req.body));
	});

	oApp.app.post('/whatsapp/create', (req, res) => {
		res.send(oApp.whatsappController.create(req.body));
	});

	oApp.app.get('/whatsapp/templates', (req, res) => {
		res.send(oApp.whatsappController.getTemplates(req.query));
	});
}

oApp.setApp = (Application) => {
	oApp.app = Application;
}

exports.setApp = oApp.setApp;
exports.load = oApp.load;