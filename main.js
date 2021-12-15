var oElectron = require('electron');
var oElectronApp = oElectron.app;
var oMenu = oElectron.Menu;
var oMenuItem = oElectron.MenuItem;
var oBrowserWindow = null;

var aTemplateMenu = require('./electron/templateMenu.js').a;
var oSettings = require('./electron/settings.js');
var sPath = __dirname + '/web/index.html';

// Menu
var oApplicationMenu = oMenu.buildFromTemplate(aTemplateMenu);

// Context Menu
var ctxMenu = new oMenu();
ctxMenu.append(new oMenuItem({label: 'Hello World'}));
ctxMenu.append(new oMenuItem({type: 'separator'}));
ctxMenu.append(new oMenuItem({role: 'cut'}));
ctxMenu.append(new oMenuItem({role: 'copy'}));
ctxMenu.append(new oMenuItem({role: 'paste'}));

// App
oElectronApp.on('ready', function(){
  oBrowserWindow = oSettings.getBrowserWindow(sPath);
  oMenu.setApplicationMenu(oApplicationMenu);
  oBrowserWindow.webContents.on('context-menu', function(e, params){
    ctxMenu.popup(oBrowserWindow, params.x, params.y);
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