var oApp = {};

oApp.fs = require('fs');
oApp.useful = require('../../lib/useful.js');

oApp.path = '';
oApp.file = '';

oApp.object = {
	templates: []
}

oApp.template = {
	name: '',
	number: '',
	templatepath: ''
}

/*
*/
oApp.setTemplate = (oTemplate) => {
	oTemplate.templates_id = oApp.object.templates.length+1;
	oApp.object.templates.push(oTemplate);
}

/*
*/
oApp.getTemplateStructure = () => {
	return oApp.template;
}

/*
*/
oApp.getTemplatesCount = () => {
	return oApp.object.templates.length;
}

/*
*/
oApp.open = () => {
	let sPathWhatsapp = 'whatsapp/';

	oApp.path = oApp.useful.getPath();
	oApp.path = `${oApp.path}${sPathWhatsapp}`;
	oApp.file = 'templates.json';

	oApp.useful.createRoute(oApp.path);

	if(oApp.fs.existsSync(`${oApp.path}${oApp.file}`)){
		oApp.object = JSON.parse(oApp.fs.readFileSync(`${oApp.path}${oApp.file}`, 'utf-8'));
	}
}

/*
*/
oApp.save = () => {
	oApp.fs.writeFileSync(`${oApp.path}${oApp.file}`, JSON.stringify(oApp.object), 'utf-8');
}

exports.setTemplate = oApp.setTemplate;
exports.getTemplateStructure = oApp.getTemplateStructure;
exports.getTemplatesCount = oApp.getTemplatesCount;
exports.open = oApp.open;
exports.save = oApp.save;