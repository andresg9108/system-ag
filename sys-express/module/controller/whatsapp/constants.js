var oApp = {};

oApp.settings = require('../../../settings.js');
oApp.useful = require('../../../lib/useful.js');

oApp.constants = {

"MESSAGE_SENT_SUCCESFULLY": [
	'Message sent succesfully.',
	'Mensaje enviado con éxito.'
],
"CREATED_SUCCESSFULLY": [
	'The "<1?>" template was created successfully.',
	'La plantilla <1?> se creó con éxito.'
],
"THE_CHANGES_WERE_SAVED_SUCCESSFULLY": [
	'The changes were saved successfully.',
	'Los cambios se guardaron con éxito.'
],
"TEMPLATE_REMOVED_SUCCESSFULLY": [
	'Template removed successfully.',
	'Plantilla eliminada correctamente.'
]

};

oApp.getConstant = (sName, aParameters = []) => {
	let oSettings = oApp.settings.getSettings();
	let sConstant = oApp.constants[sName][oSettings.language_id];
	sConstant = oApp.useful.getConstant(sConstant, aParameters);

	return sConstant;
}

exports.getConstant = oApp.getConstant;