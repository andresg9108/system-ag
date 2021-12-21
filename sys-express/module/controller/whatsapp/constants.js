var oApp = {};

oApp.settings = require('../../../settings.js');
oApp.useful = require('../../../lib/useful.js');

oApp.constants = {
};

oApp.getConstant = (sName, aParameters = []) => {
	let oSettings = oApp.settings.getSettings();
	let sConstant = oApp.constants[sName][oSettings.language_id];
	sConstant = oApp.useful.getConstant(sConstant, aParameters);

	return sConstant;
}

exports.getConstant = oApp.getConstant;