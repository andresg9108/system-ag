var oApp = {};

oApp.useful = require('../../../lib/useful.js');
oApp.globalConstants = require('../../../lib/globalConstants.js');
oApp.constants = require('./constants.js');

oApp.getTemplates = (oQuery) => {
	return oApp.useful.getResponse(true, oQuery, 
		oApp.constants.getConstant('TEST'),
		oApp.globalConstants.getConstant('SUCCESSFUL_REQUEST'));
}

exports.getTemplates = oApp.getTemplates;