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
	templatepath: '',
	template_id: null
}

/*
*/
oApp.setTemplate = (oTemplate) => {
	oTemplate.template_id = oApp.object.templates.length+1;
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
oApp.getTemplates = () => {
	return oApp.object.templates;
}

/*
*/
oApp.getTemplateById = (iId) => {
	let bExit = false;
	let oTemplate = {};

	let i = 0;
	while(i < oApp.object.templates.length && !bExit){
		if(iId == oApp.object.templates[i].template_id){
			oTemplate = oApp.object.templates[i];
			bExit = true;6
		}
		i++;
	}

	return oTemplate;
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
exports.getTemplates = oApp.getTemplates;
exports.getTemplateById = oApp.getTemplateById;
exports.open = oApp.open;
exports.save = oApp.save;