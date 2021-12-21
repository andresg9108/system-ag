var oApp = {};

oApp.settings = require('../../../settings.js');

oApp.constants = {
};

oApp.getConstant = (sName, aParameters = []) => {
	let oSettings = oApp.settings.getSettings();
	return oApp.constants[sName][oSettings.language_id];
}

exports.getConstant = oApp.getConstant;