var oApp = {};

oApp.fs = require('fs');
oApp.open = require('open');
oApp.handlebars =  require('handlebars');
oApp.useful = require('../../../lib/useful.js');
oApp.globalConstants = require('../../../lib/globalConstants.js');
oApp.constants = require('./constants.js');
oApp.jsonTemplates = require('../../../json/whatsapp/templates.js');

/*
*/
oApp.sendMessage = (oRequest) => {
	let oResponse = {};

	try{
		let sNumber = oRequest.number;
		let sMessage = oRequest.message;

		sMessage = encodeURIComponent(sMessage);

		oApp.open(`https://api.whatsapp.com/send?phone=${sNumber}&text=${sMessage}`);

		return oApp.useful.getResponse(1, oResponse, 
			oApp.constants.getConstant('MESSAGE_SENT_SUCCESFULLY'),
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
	}catch(error){
		console.log(error);
		return oApp.useful.getResponse(2, oResponse, 
			error,
			oApp.globalConstants.getConstant('SYSTEM_ERROR'));
	}
}

/*
*/
oApp.create = (oRequest) => {
	let oResponse = {};

	try{
		let sName = oRequest.name;
		let sNumber = oRequest.number;
		let sMessage = oRequest.message;
		let aTickets = oRequest.tickets;
		
		let sPathWhatsappTemp = 'whatsapp/templates/';
		let sPath = oApp.useful.getPath();
		let sFile = sName;

		sFile = sFile.replace(/[^a-zA-Z0-9áéíóúü ]/g, '');
		sFile = sFile.trim();
		
		sPath = `${sPath}${sPathWhatsappTemp}`;
		oApp.useful.createRoute(sPath);

		oApp.jsonTemplates.open();

		let iTemplatesCount = oApp.jsonTemplates.getTemplatesCount() + 1;
		sFile = `${iTemplatesCount}- ${sFile}.hbs`;
		oApp.fs.writeFileSync(`${sPath}${sFile}`, sMessage, 'utf-8');

		let oTemplate = oApp.jsonTemplates.getTemplateStructure();
		oTemplate.name = sName;
		oTemplate.number = sNumber;
		oTemplate.tickets = aTickets;
		oTemplate.templatepath = `${sPathWhatsappTemp}${sFile}`;

		oApp.jsonTemplates.setTemplate(oTemplate);
		oResponse.id = oApp.jsonTemplates.getTemplateInsertId();

		oApp.jsonTemplates.save();

		return oApp.useful.getResponse(1, oResponse, 
			oApp.constants.getConstant('CREATED_SUCCESSFULLY', [sName]),
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
	}catch(error){
		console.log(error);
		return oApp.useful.getResponse(2, oResponse, 
			error,
			oApp.globalConstants.getConstant('SYSTEM_ERROR'));
	}
}

/*
*/
oApp.getTemplates = (oRequest) => {
	let oResponse = {};

	try{
		let iId = parseInt(oRequest.id, 10);

		oApp.jsonTemplates.open();

		if(iId == 0){
			oResponse.templates = oApp.jsonTemplates.getTemplates();
		}else{
			oResponse.template = oApp.jsonTemplates.getTemplateById(iId);
			oResponse.template.message = '';

			let sTemplatePath = oResponse.template.templatepath;
			let sPathWhatsappTemp = 'whatsapp/templates/';
			let sPath = oApp.useful.getPath();

			oApp.useful.createRoute(`${sPath}${sPathWhatsappTemp}`);

			if(oApp.fs.existsSync(`${sPath}${sTemplatePath}`)){
				oResponse.template.message = oApp.fs.readFileSync(`${sPath}${sTemplatePath}`, 'UTF-8');
			}

			/*let oTemplate = oApp.handlebars.compile(oResponse.template.message);
			oResponse.template.message = oTemplate({});*/
		}

		return oApp.useful.getResponse(1, oResponse, 
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'),
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
	}catch(error){
		console.log(error);
		return oApp.useful.getResponse(2, oResponse, 
			error,
			oApp.globalConstants.getConstant('SYSTEM_ERROR'));
	}
}

exports.sendMessage = oApp.sendMessage;
exports.create = oApp.create;
exports.getTemplates = oApp.getTemplates;