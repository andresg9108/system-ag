var oApp = {};

oApp.useful = require('../../../lib/useful.js');
oApp.globalConstants = require('../../../lib/globalConstants.js');
oApp.constants = require('./constants.js');

/*
*/
oApp.create = (oRequest) => {
	let oResponse = {};

	try{
		let sPath = oApp.useful.getPath();
		let sPathWhatsappTemplates = 'whatsapp/templates';

		sPath = `${sPath}${sPathWhatsappTemplates}`;
		oApp.useful.createRoute(sPath);

		let sName = oRequest.name;

		return oApp.useful.getResponse(1, oResponse, 
			oApp.constants.getConstant('CREATED_SUCCESSFULLY', [sName]),
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
	}catch(error){
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
		let sPath = oApp.useful.getPath();
		let sPathWhatsappTemplates = 'whatsapp/templates';

		sPath = `${sPath}${sPathWhatsappTemplates}`;
		oApp.useful.createRoute(sPath);

		return oApp.useful.getResponse(1, oResponse, 
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'),
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
	}catch(error){
		return oApp.useful.getResponse(2, oResponse, 
			error,
			oApp.globalConstants.getConstant('SYSTEM_ERROR'));
	}
}

exports.create = oApp.create;
exports.getTemplates = oApp.getTemplates;