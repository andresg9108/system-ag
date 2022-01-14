var oApp = {};

oApp.electron = require('electron');
oApp.sysElectronSettings = require('./settings.js');
oApp.sysElectronTemplateContextMenu = require('./default/templateContextMenu.js');
oApp.sysElectronTemplateMenu = require('./default/templateMenu.js');

oApp.splashTime = 6000;
oApp.path = '';
oApp.webPath = '/web/index.html';
oApp.splashPath = '/splash/index.html';
oApp.BrowserWindowSplash = null;
oApp.BrowserWindow = null;
oApp.menu = {};
oApp.contextMenu = {};

oApp.setPath = (sPath) => {
	oApp.path = sPath;
}

oApp.run = () => {
	// App
	oApp.electron.app.on('ready', () => {
		oApp.menu = oApp.electron.Menu.buildFromTemplate(oApp.sysElectronTemplateMenu.getTemplateMenu());
		oApp.contextMenu = oApp.electron.Menu.buildFromTemplate(oApp.sysElectronTemplateContextMenu.getTemplateContextMenu());

		oApp.BrowserWindowSplash = oApp.sysElectronSettings.getBrowserWindowSplash(`${oApp.path}${oApp.splashPath}`);
		
		setTimeout(() => {
			oApp.BrowserWindowSplash.close();
			oApp.BrowserWindow = oApp.sysElectronSettings.getBrowserWindow(`${oApp.path}${oApp.webPath}`);
	
			oApp.electron.Menu.setApplicationMenu(oApp.menu);
			oApp.BrowserWindow.webContents.on('context-menu', (e, params) => {
				oApp.contextMenu.popup(oApp.BrowserWindow, params.x, params.y);
			});
		}, oApp.splashTime);
	});

	oApp.electron.app.on('window-all-closed', () => {
		if(process.platform !== 'darwin'){
			oApp.electron.app.quit()
		}
	});

	oApp.electron.app.on('activate', () => {
		if(oApp.BrowserWindow === null){
			oApp.BrowserWindow = oApp.sysElectronSettings.getBrowserWindow(oApp.path + '/web/index.html');
		}
	});
}

exports.setPath = oApp.setPath;
exports.run = oApp.run;