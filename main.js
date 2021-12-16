var oApp = {};

oApp.sysElectronApp = require('./sys-electron/app.js');
oApp.sysExpressApp = require('./sys-express/app.js');

oApp.sysElectronApp.setPath(__dirname);
oApp.sysElectronApp.run();

oApp.sysExpressApp.setPath(__dirname);
oApp.sysExpressApp.run();
oApp.sysExpressApp.services();