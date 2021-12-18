var oApp = {};

oApp.electron = require('electron');

oApp.templateContextMenu = [
	{
		"label": "Cortar",
		"role": "cut"
	},
	{
		"label": "Copiar",
		"role": "copy"
	},
	{
		"label": "Pegar",
		"role": "paste"
	}
];


oApp.getTemplateContextMenu = () => {
	return oApp.templateContextMenu;
}

exports.getTemplateContextMenu = oApp.getTemplateContextMenu;