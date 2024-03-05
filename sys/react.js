require('shelljs/global');

const predefinedSettings = {
    developer: true, 
    browser: true, 
    eventsInConsole: true 
};
var settings = {};
var reactProcess = null;

process.on('message', (msg = {}) => {
    settings = { ...predefinedSettings, ...msg.settings ? msg.settings : {} };
    runInConsole();
});

const runInConsole = () => {
    if(!settings.browser){
        process.env.BROWSER = 'none';
    }
    if(settings.developer){
        reactProcess = exec('react-scripts start');
        showEventsInConsole();
    }
}


const showEventsInConsole = () => {
    if(settings.eventsInConsole){
        reactProcess.stdout.on('data', (data) => {
            console.log('React:', data);
        });

        reactProcess.stderr.on('data', (data) => {
          console.error('React [Error]:', data);
        });

        reactProcess.on('close', (code) => {
        });
    }
}