require('shelljs/global');
const electron = require('electron');
const path = require('path');
const waitOn = require('wait-on');

const predefinedSettings = {
    developer: true 
};
var settings = {};
var electronProcess = null;
var mainWindow = null;

process.on('message', (msg = {}) => {
    settings = { ...predefinedSettings, ...msg.settings ? msg.settings : {} };
    runInConsole();
});


const runInConsole = () => {
    if(settings.developer){
      waitOn({
        resources: ['http://localhost:3000']
      }, error => {
        if(error){
            console.error('Electron [Error]:', error);
        }else{
            test();
        }
      });
    }
}

const test = () => {
    console.log('Electron');
    console.log(electron);

    /*
    electron.app.on('ready', () => {
        console.log('Ok');
    });
    */
}