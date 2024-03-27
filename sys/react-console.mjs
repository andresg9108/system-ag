import shell from 'shelljs';

const predefinedSettings = {
    developer: true, 
    browser: true 
};
var settings = {};

process.on('message', (msg) => {
    settings = { ...predefinedSettings, ...(msg.settings ? msg.settings : {}) };
    runInConsole();
});

const runInConsole = () => {
    if(!settings.browser){
        process.env.BROWSER = 'none';
    }
    if(settings.developer){
        shell.exec('react-scripts start');
    }
}