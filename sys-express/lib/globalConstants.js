var oApp = {};

oApp.settings = require('../settings.js');
oApp.useful = require('./useful.js');

oApp.constants = {

"SUCCESSFUL_REQUEST": [
	"Successful application.",
	"Solicitud exitosa."
],
"SYSTEM_ERROR": [
	"System error.",
	"Error del sistema."
],
"YOU_MUST_ADD_SYSTEM_AG": [
	"You must add the SYSTEM_AG environment variable where the system files are stored.",
	"Debe agregar la variable de entorno SYSTEM_AG donde se almacenan los archivos del sistema."
]

};

oApp.getConstant = (sName, aParameters = []) => {
	let oSettings = oApp.settings.getSettings();
	let sConstant = oApp.constants[sName][oSettings.language_id];
	sConstant = oApp.useful.getConstant(sConstant, aParameters);

	return sConstant;
}

exports.getConstant = oApp.getConstant;