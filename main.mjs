/*
import shell from 'shelljs';
shell.exec('electron .');
*/

import { fork } from 'child_process';

const oReactConsole = fork('./sys/react-console.mjs');
const oElectronConsole = fork('./sys/electron-console.mjs');

oReactConsole.send({
    settings: {
        browser: false 
    }
});
oElectronConsole.send({});