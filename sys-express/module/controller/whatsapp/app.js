var oApp = {};

oApp.fs = require('fs');
oApp.useful = require('../../../lib/useful.js');
oApp.globalConstants = require('../../../lib/globalConstants.js');
oApp.constants = require('./constants.js');

oApp.getTemplates = (oQuery) => {
	let oResponse = {};

	try{
		let sPath = oApp.useful.getPath();
		let sPathWhatsappTemplates = 'whatsapp/templates';

		sPath = `${sPath}${sPathWhatsappTemplates}`;
		if(!oApp.fs.existsSync(sPath)){ oApp.fs.mkdirSync(sPath, {recursive:true}); }

		return oApp.useful.getResponse(true, oResponse, 
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'),
			oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
	}catch(error){
		return oApp.useful.getResponse(false, oResponse, 
			error,
			oApp.globalConstants.getConstant('SYSTEM_ERROR'));
	}
}

exports.getTemplates = oApp.getTemplates;