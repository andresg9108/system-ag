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
oApp.delete = (oRequest) => {
	let oResponse = {};

	try{
		let iId = parseInt(oRequest.id);

		let sPathWhatsappTemp = 'whatsapp/templates/';
		let sPath = oApp.useful.getPath();

		oApp.useful.createRoute(`${sPath}${sPathWhatsappTemp}`);

		oApp.jsonTemplates.open();

		let oTemplate = oApp.jsonTemplates.getTemplateById(iId);
		let sTemplatepath = oTemplate.templatepath;

		if(oApp.fs.existsSync(`${sPath}${sTemplatepath}`)){
			oApp.fs.unlinkSync(`${sPath}${sTemplatepath}`);
		}

		oApp.jsonTemplates.delete(iId);
		oResponse.id = iId;

		oApp.jsonTemplates.save();

		return oApp.useful.getResponse(1, oResponse, 
			oApp.constants.getConstant('TEMPLATE_REMOVED_SUCCESSFULLY'),
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
oApp.edit = (oRequest) => {
	let oResponse = {};

	try{
		let iId = parseInt(oRequest.id);
		let sName = oRequest.name;
		let sNumber = oRequest.number;
		let sMessage = oRequest.message;
		let iTicketsid = parseInt(oRequest.ticketsid);
		let aTickets = (typeof oRequest.tickets != 'undefined') ? oRequest.tickets : [];

		let sPathWhatsappTemp = 'whatsapp/templates/';
		let sPath = oApp.useful.getPath();

		oApp.useful.createRoute(`${sPath}${sPathWhatsappTemp}`);

		oApp.jsonTemplates.open();

		let oTemplate = oApp.jsonTemplates.getTemplateById(iId);
		let sTemplatepath = oTemplate.templatepath;

		oApp.fs.writeFileSync(`${sPath}${sTemplatepath}`, sMessage, 'utf-8');

		oTemplate.name = sName;
		oTemplate.number = sNumber;
		oTemplate.tickets_id = iTicketsid;
		oTemplate.tickets = aTickets;

		oApp.jsonTemplates.setTemplate(oTemplate);
		oResponse.id = oTemplate.template_id;

		oApp.jsonTemplates.save();

		return oApp.useful.getResponse(1, oResponse, 
			oApp.constants.getConstant('THE_CHANGES_WERE_SAVED_SUCCESSFULLY'),
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
oApp.send = (oRequest) => {
	let oResponse = {};

	try{
		let iId = parseInt(oRequest.id);
		let sNumber = oRequest.number;
		let aQuestions = (typeof oRequest.questions != 'undefined') ? oRequest.questions : [];

		oApp.jsonTemplates.open();

		let oTemplate = oApp.jsonTemplates.getTemplateById(iId);
		let sTemplatePath = oTemplate.templatepath;
		let sPathWhatsappTemp = 'whatsapp/templates/';
		let sPath = oApp.useful.getPath();
		let sMessage = '';

		oApp.useful.createRoute(`${sPath}${sPathWhatsappTemp}`);

		if(oApp.fs.existsSync(`${sPath}${sTemplatePath}`)){
			sMessage = oApp.fs.readFileSync(`${sPath}${sTemplatePath}`, 'UTF-8');
		}

		let oReqMessage = {};
		aQuestions.forEach((v, i) => {
			oReqMessage[v.name] = v.value;
		});

		let oMessageTemplate = oApp.handlebars.compile(sMessage);
		sMessage = oMessageTemplate(oReqMessage);

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
		let iTicketsid = parseInt(oRequest.ticketsid);
		let aTickets = (typeof oRequest.tickets != 'undefined') ? oRequest.tickets : [];
		
		let sPathWhatsappTemp = 'whatsapp/templates/';
		let sPath = oApp.useful.getPath();
		let sFile = sName;

		sFile = sFile.replace(/[^a-zA-Z0-9áéíóúü ]/g, '');
		sFile = sFile.trim();
		sFile = `${sFile}.hbs`;
		
		sPath = `${sPath}${sPathWhatsappTemp}`;
		oApp.useful.createRoute(sPath);

		let i = 2;
		while(oApp.fs.existsSync(`${sPath}${sFile}`)){
			sFile = `${i}-${sFile}`;
			i++;
		}

		oApp.fs.writeFileSync(`${sPath}${sFile}`, sMessage, 'utf-8');

		oApp.jsonTemplates.open();

		let oTemplate = oApp.jsonTemplates.getTemplateStructure();
		oTemplate.template_id = null;
		oTemplate.name = sName;
		oTemplate.number = sNumber;
		oTemplate.tickets_id = iTicketsid;
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

exports.delete = oApp.delete;
exports.edit = oApp.edit;
exports.send = oApp.send;
exports.sendMessage = oApp.sendMessage;
exports.create = oApp.create;
exports.getTemplates = oApp.getTemplates;