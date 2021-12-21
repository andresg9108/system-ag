var oApp = {};

oApp.settings = require('../../../settings.js');
oApp.useful = require('../../../lib/useful.js');

oApp.constants = {

"CREATED_SUCCESSFULLY": [
	'The "<1?>" template was created successfully.',
	'La plantilla <1?> se creó con éxito.'
]

};

oApp.getConstant = (sName, aParameters = []) => {
	let oSettings = oApp.settings.getSettings();
	let sConstant = oApp.constants[sName][oSettings.language_id];
	sConstant = oApp.useful.getConstant(sConstant, aParameters);

	return sConstant;
}

exports.getConstant = oApp.getConstant;