var oApp = {};

oApp.useful = require('../../lib/useful.js');

oApp.getTemplates = (oQuery) => {
	return oApp.useful.getResponse(true, oQuery, 
		'Client.',
		'Developer.');
}

exports.getTemplates = oApp.getTemplates;