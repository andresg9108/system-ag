var oApp = {};

oApp.fs = require('fs');
oApp.useful = require('../../../lib/useful.js');
oApp.globalConstants = require('../../../lib/globalConstants.js');
oApp.constants = require('./constants.js');
oApp.jsonTemplates = require('../../../json/whatsapp/templates.js');

/*
*/
oApp.create = (oRequest) => {
	let oResponse = {};

	try{
		let sName = oRequest.name;
		let sNumber = oRequest.number;
		let sMessage = oRequest.message;

		let sPathWhatsappTemp = 'whatsapp/templates/';
		let sPath = oApp.useful.getPath();
		let sFile = sName;

		sMessage = decodeURIComponent(sMessage);
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
		oTemplate.templatepath = `${sPathWhatsappTemp}${sFile}`;

		oApp.jsonTemplates.setTemplate(oTemplate);
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

exports.create = oApp.create;
exports.getTemplates = oApp.getTemplates;