var oElectron = require('electron');
var oElectronBrowserWindow = oElectron.BrowserWindow;
var oElectronShell = oElectron.shell;
var oUrl = require('url');
var oPath = require('path');
var oBrowserWindow = null;

/*
Examples
*/
// oElectronShell.openExternal('https://twitch.tv/andresg9108');
// oBrowserWindow.loadURL('https://twitch.tv/andresg9108');

var aTemplateContextMenu = [
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

var aTemplateMenu = [
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
					oElectronShell.openExternal('https://twitter.com/andresg9108');
				}
			},
			{type: 'separator'},
			{
				label: 'Proyectos',
				submenu: [
					{
						label: 'Proyecto "ManyP"',
						click: () => {
							oElectronShell.openExternal('https://github.com/andresg9108/manyp');
						}
					},
					{
						label: 'Proyecto "OneP"',
						click: () => {
							oElectronShell.openExternal('https://github.com/andresg9108/onep');
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
							oElectronShell.openExternal('https://twitter.com/andresg9108');
						}
					},
					{
						label: 'Facebook',
						click: () => {
							oElectronShell.openExternal('https://facebook.com/andresg9108');
						}
					},
					{
						label: 'Instagram',
						click: () => {
							oElectronShell.openExternal('https://instagram.com/andresg9108');
						}
					},
					{
						label: 'Linkedin',
						click: () => {
							oElectronShell.openExternal('https://co.linkedin.com/in/andres-gonzalez-53a768106');
						}
					},
					{
						label: 'Youtube',
						click: () => {
							oElectronShell.openExternal('https://www.youtube.com/c/AndresGonzalez91');
						}
					},
					{
						label: 'Twitch',
						click: () => {
							oElectronShell.openExternal('https://www.twitch.tv/andresg9108');
						}
					}
				]
			}
		]
	}
];

var getTemplateContextMenu = () => {
	return aTemplateContextMenu;
}

var getTemplateMenu = () => {
	return aTemplateMenu;
}

var getBrowserWindow = (sPath) => {
	oBrowserWindow = new oElectronBrowserWindow({
		'x': 50,
		'y': 50,
		'width': 500,
		'height': 500,
		'skip-taskbar': false,
		//'icon': './electron-builder/icon.png',
		'frame': true,
		'title': 'System AG',
		webPreferences: {
			nodeIntegration: true
		}
	});

	oBrowserWindow.maximize();

	// oBrowserWindow.setMenu(null);

	oBrowserWindow.loadURL(oUrl.format({
		pathname: oPath.join(sPath),
		protocol: 'file:',
		slashes: true
	}));

	oBrowserWindow.webContents.openDevTools();

	oBrowserWindow.on('closed', () => {
		oBrowserWindow = null
	});

	return oBrowserWindow;
}

exports.getTemplateContextMenu = getTemplateContextMenu;
exports.getTemplateMenu = getTemplateMenu;
exports.getBrowserWindow = getBrowserWindow;