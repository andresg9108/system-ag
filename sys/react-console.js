require('shelljs/global');

const predefinedSettings = {
    developer: true, 
    browser: true 
};
var settings = {};

process.on('message', msg => {
    settings = { ...predefinedSettings, ...msg.settings ? msg.settings : {} };
    runInConsole();
});

const runInConsole = () => {
    if(!settings.browser){
        process.env.BROWSER = 'none';
    }
    if(settings.developer){
        exec('npm run react-start');
    }
}
