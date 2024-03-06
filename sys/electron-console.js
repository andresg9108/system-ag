require('shelljs/global');
const waitOn = require('wait-on');

const predefinedSettings = {
    developer: true 
};
var settings = {};

process.on('message', msg => {
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
            exec('electron .');
        }
      });
    }
}