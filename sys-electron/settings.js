var oApp = {};

oApp.BrowserWindow = null;
oApp.url = require('url');
oApp.path = require('path');
oApp.electron = require('electron');

/* Examples */
// oApp.electron.shell.openExternal('https://twitch.tv/andresg9108');
// oApp.BrowserWindow.loadURL('https://twitch.tv/andresg9108');
/* Examples */

oApp.aTemplateContextMenu = [
	{
		label: 'Cortar',
		role: 'cut'
	},
	{
		label: 'Copiar',
		role: 'copy'
	},
	{
		label: 'Pegar',
		role: 'paste'
	}
];

oApp.aTemplateMenu = [
	{
		label: 'Editar',
		submenu: [
			{
				label: 'Deshacer',
				role: 'undo'
			},
			{
				label: 'Rehacer',
				role: 'redo'
			},
			{type: 'separator'},
			{
				label: 'Cortar',
				role: 'cut'
			},
			{
				label: 'Copiar',
				role: 'copy'
			},
			{
				label: 'Pegar',
				role: 'paste'
			},
			{
				label: 'Pegar y Combinar Estilo',
				role: 'pasteandmatchstyle'},
			{
				label: 'Eliminar',
				role: 'delete'
			},
			{
				label: 'Seleccionar Todo',
				role: 'selectall'
			}
		]
	},
	{
		label: 'Desarrollador',
		submenu: [
			{
				label: 'Andrés González',
				click: () => {
					oApp.electron.shell.openExternal('https://twitter.com/andresg9108');
				}
			},
			{type: 'separator'},
			{
				label: 'Proyectos',
				submenu: [
					{
						label: 'Proyecto "ManyP"',
						click: () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/manyp');
						}
					},
					{
						label: 'Proyecto "OneP"',
						click: () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/onep');
						}
					}
				]
			},
			{
				label: 'Redes',
				submenu: [
					{
						label: 'Twitter',
						click: () => {
							oApp.electron.shell.openExternal('https://twitter.com/andresg9108');
						}
					},
					{
						label: 'Facebook',
						click: () => {
							oApp.electron.shell.openExternal('https://facebook.com/andresg9108');
						}
					},
					{
						label: 'Instagram',
						click: () => {
							oApp.electron.shell.openExternal('https://instagram.com/andresg9108');
						}
					},
					{
						label: 'Linkedin',
						click: () => {
							oApp.electron.shell.openExternal('https://co.linkedin.com/in/andres-gonzalez-53a768106');
						}
					},
					{
						label: 'Youtube',
						click: () => {
							oApp.electron.shell.openExternal('https://www.youtube.com/c/AndresGonzalez91');
						}
					},
					{
						label: 'Twitch',
						click: () => {
							oApp.electron.shell.openExternal('https://www.twitch.tv/andresg9108');
						}
					}
				]
			}
		]
	}
];

oApp.getTemplateContextMenu = () => {
	return oApp.aTemplateContextMenu;
}

oApp.getTemplateMenu = () => {
	return oApp.aTemplateMenu;
}

oApp.getBrowserWindow = (sPath) => {
	oApp.BrowserWindow = new oApp.electron.BrowserWindow({
		'center': true,
		// 'fullscreen': true,
		// 'x': 0,
		// 'y': 0,
		'width': 500,
		'height': 600,
		// 'backgroundColor': '#000000',
		'skipTaskbar': false,
		'hasShadow': true,
		//'icon': './electron-builder/icon.png',
		'frame': true,
		'title': 'System AG',
		webPreferences: {
			nodeIntegration: true
		}
	});

	oApp.BrowserWindow.loadURL(oApp.url.format({
		pathname: oApp.path.join(sPath),
		protocol: 'file:',
		slashes: true
	}));

	oApp.BrowserWindow.on('closed', () => {
		oApp.BrowserWindow = null
	});

	// oApp.BrowserWindow.setMenu(null);
	// oApp.BrowserWindow.maximize();
	oApp.BrowserWindow.webContents.openDevTools()

	return oApp.BrowserWindow;
}

exports.getTemplateContextMenu = oApp.getTemplateContextMenu;
exports.getTemplateMenu = oApp.getTemplateMenu;
exports.getBrowserWindow = oApp.getBrowserWindow;