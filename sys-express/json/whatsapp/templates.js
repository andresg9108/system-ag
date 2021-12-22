var oApp = {};

oApp.fs = require('fs');
oApp.useful = require('../../lib/useful.js');

oApp.object = {
	templates: []
}

oApp.load = (oData) => {
	let sPath = oApp.useful.getPath();
	let sPathWhatsappTemplates = 'whatsapp/';
	let sFile = 'templates.json';
	sPath = `${sPath}${sPathWhatsappTemplates}`;

	oApp.useful.createRoute(sPath);

	if(!oApp.fs.existsSync(`${sPath}${sFile}`)){
		oData.templates_id = 1;
		oApp.object.templates = [oData]

		let sObject = JSON.stringify(oApp.object);
		oApp.fs.writeFileSync(`${sPath}${sFile}`, sObject, 'utf-8');
	}else{
		console.log('Ya existe.');
	}
}

exports.load = oApp.load;