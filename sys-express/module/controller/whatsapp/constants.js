var oApp = {};

oApp.settings = require('../../../settings.js');

oApp.constants = {

"TEST": [
	"Hello World.",
	"Hola Mundo."
]

};

oApp.getConstant = (sName) => {
	let oSettings = oApp.settings.getSettings();
	return oApp.constants[sName][oSettings.language_id];
}

exports.getConstant = oApp.getConstant;