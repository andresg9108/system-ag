require('shelljs/global');

const { fork } = require('child_process');

const oReactConsole = fork('./sys/react-console.js');
const oElectronConsole = fork('./sys/electron-console.js');

oReactConsole.send({
    settings: {
        browser: false 
    }
});
oElectronConsole.send({});