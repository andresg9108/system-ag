var oElectron = require('electron');
var oElectronShell = oElectron.shell;

// oWin.loadURL('https://twitch.tv/andresg9108');

exports.a=[
{
  label: 'MenÃº',
  submenu: [
    {
      label: 'RegÃ­strate',
      click: function(){
        oElectronShell.openExternal('https://twitch.tv/andresg9108');
      }
    },
    {
      label: 'Recuperar contraseÃ±a',
      click: function(){
        oElectronShell.openExternal('https://twitch.tv/andresg9108');
      }
    },
    {type: 'separator'},
    {
      label: 'Cargar sitio web',
      click: function(){
        oElectronShell.openExternal('https://twitch.tv/andresg9108');
      }
    }
  ]
},
{
  label: 'Editar',
  submenu: [
    {role: 'undo'},
    {role: 'redo'},
    {type: 'separator'},
    {role: 'cut'},
    {role: 'copy'},
    {role: 'paste'},
    {role: 'pasteandmatchstyle'},
    {role: 'delete'},
    {role: 'selectall'}
  ]
}
];