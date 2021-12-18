var oApp = {};

oApp.fs = require('fs');
oApp.useful = require('../../../lib/useful.js');
oApp.globalConstants = require('../../../lib/globalConstants.js');
oApp.constants = require('./constants.js');

oApp.getTemplates = (oQuery) => {
	let sPath = oApp.useful.getPath();
	let sPathWhatsappTemplates = 'whatsapp/templates';
	let oResponse = {};

	oResponse.dirs = [];

	if(sPath != ''){
		sPath = `${sPath}${sPathWhatsappTemplates}`;
		if(!oApp.fs.existsSync(sPath)){ oApp.fs.mkdirSync(sPath, {recursive:true}); }

		let aDirs = oApp.fs.readdirSync(sPath);
		for(let i=0; i<aDirs.length; i++){
			let oDir = {};
			oDir.name = aDirs[i];

			oResponse.dirs.push(oDir);
		}
	}

	return oApp.useful.getResponse(true, oResponse, 
		oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'),
		oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
}

exports.getTemplates = oApp.getTemplates;