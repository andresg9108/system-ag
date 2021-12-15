var oElectron = require('electron');
var oElectronBrowserWindow = oElectron.BrowserWindow;
var oUrl = require('url');
var oPath = require('path');

var getBrowserWindow = (sPath) => {
	let oBrowserWindow = new oElectronBrowserWindow({
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

exports.getBrowserWindow = getBrowserWindow;