var oElectron = require('electron');
var oElectronApp = oElectron.app;
var oElectronMenu = oElectron.Menu;
var oSettings = require('../electron/settings.js');
var oBrowserWindow = null;

var run = (sPath) => {
	// Menu
	var oMenu = oElectronMenu.buildFromTemplate(oSettings.getTemplateMenu());

	// Context Menu
	var oContextMenu = oElectronMenu.buildFromTemplate(oSettings.getTemplateContextMenu());

	// App
	oElectronApp.on('ready', () => {
	  oBrowserWindow = oSettings.getBrowserWindow(sPath);
	  oElectronMenu.setApplicationMenu(oMenu);
	  oBrowserWindow.webContents.on('context-menu', (e, params) => {
	    oContextMenu.popup(oBrowserWindow, params.x, params.y);
	  });
	});
	oElectronApp.on('window-all-closed', () => {
	  if (process.platform !== 'darwin') {
	    oElectronApp.quit()
	  }
	});
	oElectronApp.on('activate', () => {
	  if (oBrowserWindow === null) {
	    oBrowserWindow = oSettings.getBrowserWindow(sPath);
	  }
	});
}

exports.run = run;