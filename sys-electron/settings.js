var oApp = {};

oApp.fs = require("fs");
oApp.url = require('url');
oApp.path = require('path');
oApp.electron = require('electron');

oApp.BrowserWindowSplash = null;
oApp.BrowserWindow = null;

oApp.getBrowserWindowSplash = (sPath) => {
	oApp.BrowserWindowSplash = new oApp.electron.BrowserWindow({
		'width': 600,
		'height': 400,
		'center': true,
		'frame': false,
		'autoHideMenuBar': true,
		'title': 'System AG',
		'minimizable': false,
		'resizable': false,
		'movable': false,
		'closable': true,
		'skipTaskbar': true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	oApp.BrowserWindowSplash.loadURL(oApp.url.format({
		pathname: oApp.path.join(sPath),
		protocol: 'file:',
		slashes: true
	}));

	oApp.BrowserWindowSplash.on('closed', () => {
		oApp.BrowserWindowSplash = null;
	});

	return oApp.BrowserWindowSplash;
}

oApp.getBrowserWindow = (sPath) => {
	oApp.BrowserWindow = new oApp.electron.BrowserWindow({
		'show': false,
		'width': 500,
		'height': 600,
		'center': true,
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
		oApp.BrowserWindow = null;
	});

	// oApp.BrowserWindow.setMenu(null);
	oApp.BrowserWindow.maximize();
	oApp.BrowserWindow.webContents.openDevTools();

	return oApp.BrowserWindow;
}

exports.getBrowserWindowSplash = oApp.getBrowserWindowSplash;
exports.getBrowserWindow = oApp.getBrowserWindow;