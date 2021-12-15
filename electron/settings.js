var oElectron = require('electron');
var oElectronBrowserWindow = oElectron.BrowserWindow;
var oElectronShell = oElectron.shell;
var oUrl = require('url');
var oPath = require('path');
var oBrowserWindow = null;

var aTemplateContextMenu = [
	{label: 'Hello World'},
	{type: 'separator'},
	{role: 'cut'},
	{role: 'copy'},
	{role: 'paste'}
];

var aTemplateMenu = [
	{
		label: 'MenÃº',
		submenu: [
			{
				label: 'RegÃ­strate',
				click: function(){
					oElectronShell.openExternal('https://twitch.tv/andresg9108');
				}
			},
			{
				label: 'Recuperar contraseÃ±a',
				click: function(){
					oElectronShell.openExternal('https://twitch.tv/andresg9108');
				}
			},
			{
				type: 'separator'
			},
			{
				label: 'Cargar sitio web',
				click: function(){
					// oElectronShell.openExternal('https://twitch.tv/andresg9108');
					oBrowserWindow.loadURL('https://twitch.tv/andresg9108');
				}
			}
		]
	},
	{
		label: 'Editar',
		submenu: [
			{role: 'undo'},
			{role: 'redo'},
			{type: 'separator'},
			{role: 'cut'},
			{role: 'copy'},
			{role: 'paste'},
			{role: 'pasteandmatchstyle'},
			{role: 'delete'},
			{role: 'selectall'}
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
		'x': 0,
		'y': 0,
		//'width': 850,
		//'height': 530,
		'skip-taskbar': false,
		//'icon': './electron-builder/icon.png',
		'frame': true,
		'title': 'System',
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