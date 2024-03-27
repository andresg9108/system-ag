import { createRequire } from 'module';
import isDev from 'electron-is-dev';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const electron = require('electron');
const { app, BrowserWindow } = electron;
var mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({width: 900, height: 680});

  /*
  mainWindow.loadURL(`file://${path.join(__dirname, './build/index.html')}`);
  console.log(`file://${path.join(__dirname, './build/index.html')}`);
  */

  if(isDev){
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:3000');
  }else{
    mainWindow.loadURL(`file://${path.join(__dirname, './build/index.html')}`);
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
  if(mainWindow === null){
    createWindow();
  }
});