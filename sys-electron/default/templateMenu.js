var oApp = {};

oApp.electron = require('electron');

/* Examples */
// oApp.electron.shell.openExternal('https://twitch.tv/andresg9108');
// oApp.BrowserWindow.loadURL('https://twitch.tv/andresg9108');
/* Examples */

oApp.templateMenu = [
	{
		"label": "Editar",
		"submenu": [
			{
				"label": "Deshacer",
				"role": "undo"
			},
			{
				"label": "Rehacer",
				"role": "redo"
			},
			{"type": "separator"},
			{
				"label": "Cortar",
				"role": "cut"
			},
			{
				"label": "Copiar",
				"role": "copy"
			},
			{
				"label": "Pegar",
				"role": "paste"
			},
			{
				"label": "Pegar y Combinar Estilo",
				"role": "pasteandmatchstyle"
			},
			{
				"label": "Eliminar",
				"role": "delete"
			},
			{
				"label": "Seleccionar Todo",
				"role": "selectall"
			}
		]
	},
	{
		"label": "Desarrollador",
		"submenu": [
			{
				"label": "Andrés González",
				"click": () => {
					oApp.electron.shell.openExternal('https://twitter.com/andresg9108');
				}
			},
			{
				"label": "Telegram",
				"click": () => {
					oApp.electron.shell.openExternal('https://t.me/andresg9108Bot');
				}
			},
			{"type": "separator"},
			{
				"label": "Proyectos",
				"submenu": [
					{
						"label": "Proyecto ManyP",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/manyp');
						}
					},
					{
						"label": "Proyecto OneP",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/onep');
						}
					},
					{
						"label": "Proyecto MyDesign",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/mydesign');
						}
					},
					{
						"label": "Proyecto JsonPHP",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/jsonphp');
						}
					},
					{
						"label": "Proyecto grunt-contrib-processpy",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/grunt-contrib-processpy');
						}
					},
					{
						"label": "Proyecto Processpy",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/processpy');
						}
					},
					{
						"label": "Proyecto SmartTable",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/smarttable');
						}
					},
					{
						"label": "Proyecto Connectiondb",
						"click": () => {
							oApp.electron.shell.openExternal('https://github.com/andresg9108/connectiondb');
						}
					}
				]
			},
			{
				"label": "Redes",
				"submenu": [
					{
						"label": "Twitter",
						"click": () => {
							oApp.electron.shell.openExternal('https://twitter.com/andresg9108');
						}
					},
					{
						"label": "Facebook",
						"click": () => {
							oApp.electron.shell.openExternal('https://facebook.com/andresg9108');
						}
					},
					{
						"label": "Instagram",
						"click": () => {
							oApp.electron.shell.openExternal('https://instagram.com/andresg9108');
						}
					},
					{
						"label": "Linkedin",
						"click": () => {
							oApp.electron.shell.openExternal('https://co.linkedin.com/in/andres-gonzalez-53a768106');
						}
					},
					{
						"label": "Youtube",
						"click": () => {
							oApp.electron.shell.openExternal('https://www.youtube.com/c/AndresGonzalez91');
						}
					},
					{
						"label": "Twitch",
						"click": () => {
							oApp.electron.shell.openExternal('https://www.twitch.tv/andresg9108');
						}
					},
					{"type": "separator"},
					{
						"label": "Desarrollador",
						"submenu": [
							{
								"label": "NPM",
								"click": () => {
									oApp.electron.shell.openExternal('https://www.npmjs.com/~andresg9108');
								}
							},
							{
								"label": "GitHub",
								"click": () => {
									oApp.electron.shell.openExternal('https://github.com/andresg9108');
								}
							}
						]
					},
					{
						"label": "Ajedrez",
						"submenu": [
							{
								"label": "Chess.com",
								"click": () => {
									oApp.electron.shell.openExternal('https://www.chess.com/member/andresg9108');
								}
							},
							{
								"label": "LiChess",
								"click": () => {
									oApp.electron.shell.openExternal('https://lichess.org/@/andresg9108');
								}
							},
							{
								"label": "Chess24",
								"click": () => {
									oApp.electron.shell.openExternal('https://chess24.com/es/profile/andresg9108');
								}
							}
						]
					}
				]
			},
			{"type": "separator"},
			{
				"label": "Contáctame",
				"click": () => {
					oApp.electron.shell.openExternal('https://docs.google.com/forms/d/e/1FAIpQLSdZmOOVGexj5cMxL4lNnGTfnVAcRdFB9etqourAa4mGpVaFgg/viewform');
				}
			},
			{
				"label": "Más",
				"submenu": [
					{
						"label": "Videos épicos",
						"click": () => {
							oApp.electron.shell.openExternal('https://bit.ly/VideosEpicos');
						}
					},
					{
						"label": "Lista de reproducción",
						"click": () => {
							oApp.electron.shell.openExternal('https://open.spotify.com/playlist/5iSExi7MigbsVUUnMZGCoD');
						}
					}
				]
			}
		]
	}
];

oApp.getTemplateMenu = () => {
	return oApp.templateMenu;
}

exports.getTemplateMenu = oApp.getTemplateMenu;