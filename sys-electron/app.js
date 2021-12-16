var oApp = {};

oApp.path = '';
oApp.BrowserWindow = null;
oApp.electron = require('electron');
oApp.sysElectronSettings = require('./settings.js');

oApp.setPath = (sPath) => {
	oApp.path = sPath;
}

oApp.run = () => {
	// Menu
	var oMenu = oApp.electron.Menu.buildFromTemplate(oApp.sysElectronSettings.getTemplateMenu());

	// Context Menu
	var oContextMenu = oApp.electron.Menu.buildFromTemplate(oApp.sysElectronSettings.getTemplateContextMenu());

	// App
	oApp.electron.app.on('ready', () => {
	  oApp.BrowserWindow = oApp.sysElectronSettings.getBrowserWindow(oApp.path + '/web/index.html');
	  oApp.electron.Menu.setApplicationMenu(oMenu);
	  oApp.BrowserWindow.webContents.on('context-menu', (e, params) => {
	    oContextMenu.popup(oApp.BrowserWindow, params.x, params.y);
	  });
	});
	oApp.electron.app.on('window-all-closed', () => {
	  if (process.platform !== 'darwin') {
	    oApp.electron.app.quit()
	  }
	});
	oApp.electron.app.on('activate', () => {
	  if (oApp.BrowserWindow === null) {
	    oApp.BrowserWindow = oApp.sysElectronSettings.getBrowserWindow(oApp.path + '/web/index.html');
	  }
	});
}

exports.setPath = oApp.setPath;
exports.run = oApp.run;