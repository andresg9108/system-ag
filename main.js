var oApp = {};

oApp.sysElectronApp = require('./sys-electron/app.js');
oApp.sysExpressSrcApp = require('./sys-express/app.js');

oApp.sysElectronApp.setPath(__dirname);
oApp.sysElectronApp.run();

oApp.sysExpressSrcApp.setPath(__dirname);
oApp.sysExpressSrcApp.run();