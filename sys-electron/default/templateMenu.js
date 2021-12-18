var oApp = {};

oApp.electron = require('electron');

/* Examples */
// oApp.electron.shell.openExternal('https://twitch.tv/andresg9108');
// oApp.BrowserWindow.loadURL('https://twitch.tv/andresg9108');
/* Examples */

oApp.templateMenu = [
	{
		"label": "Editar",
		"submenu": [
			{
				"label": "Deshacer",
				"role": "undo"
			},
			{
				"label": "Rehacer",
				"role": "redo"
			},
			{"type": "separator"},
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
			},
			{
				"label": "Pegar y Combinar Estilo",
				"role": "pasteandmatchstyle"
			},
			{
				"label": "Eliminar",
				"role": "delete"
			},
			{
				"label": "Seleccionar Todo",
				"role": "selectall"
			}
		]
	},
	{
		"label": "Desarrollador",
		"submenu": [
			{
				"label": "Andrés González",
				"click": () => {
					oApp.electron.shell.openExternal('https://twitter.com/andresg9108');
				}
			},
			{"type": "separator"},
			{
				"label": "Proyectos",
				"submenu": [
					{
						"label": "Proyecto ManyP",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/manyp');
						}
					},
					{
						"label": "Proyecto OneP",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/onep');
						}
					}
				]
			},
			{
				"label": "Redes",
				"submenu": [
					{
						"label": "Twitter",
						"click": () => {
							oApp.electron.shell.openExternal('https://twitter.com/andresg9108');
						}
					},
					{
						"label": "Facebook",
						"click": () => {
							oApp.electron.shell.openExternal('https://facebook.com/andresg9108');
						}
					},
					{
						"label": "Instagram",
						"click": () => {
							oApp.electron.shell.openExternal('https://instagram.com/andresg9108');
						}
					},
					{
						"label": "Linkedin",
						"click": () => {
							oApp.electron.shell.openExternal('https://co.linkedin.com/in/andres-gonzalez-53a768106');
						}
					},
					{
						"label": "Youtube",
						"click": () => {
							oApp.electron.shell.openExternal('https://www.youtube.com/c/AndresGonzalez91');
						}
					},
					{
						"label": "Twitch",
						"click": () => {
							oApp.electron.shell.openExternal('https://www.twitch.tv/andresg9108');
						}
					}
				]
			}
		]
	}
];

oApp.getTemplateMenu = () => {
	return oApp.templateMenu;
}

exports.getTemplateMenu = oApp.getTemplateMenu;