var oApp = {};

oApp.settings = require('../settings.js');

oApp.constants = {

"SUCCESSFUL_REQUEST": [
	"Successful application.",
	"Solicitud exitosa."
]

};

oApp.getConstant = (sName, aParameters = []) => {
	let oSettings = oApp.settings.getSettings();
	let sConstant = oApp.constants[sName][oSettings.language_id];

	return sConstant;
}

exports.getConstant = oApp.getConstant;