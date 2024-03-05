const electron = require('electron');

electron.app.on('ready', () => {
    console.log('Ok');
});

/*
require('shelljs/global');

const { fork } = require('child_process');
const oReactProcess = fork('./sys/react.js');
const oElectronProcess = fork('./sys/electron2.js');

oReactProcess.send({
    settings: {
        browser: false 
    }
});
oElectronProcess.send({});

// exec('npm run grunt');
*/