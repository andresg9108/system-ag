import shell from 'shelljs';
import waitOn from 'wait-on';

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
        })
        .then(() => {
            shell.exec('electron .');
        })
        .catch(oError => {
            console.error('Electron [Error]:', oError);
        });
    }
}