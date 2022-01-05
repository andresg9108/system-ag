var oApp = {};

oApp.BrowserWindow = null;
oApp.fs = require("fs");
oApp.url = require('url');
oApp.path = require('path');
oApp.electron = require('electron');

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
	oApp.BrowserWindow.maximize();
	oApp.BrowserWindow.webContents.openDevTools();

	return oApp.BrowserWindow;
}

exports.getBrowserWindow = oApp.getBrowserWindow;