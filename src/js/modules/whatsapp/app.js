"use strict";

var oApp = {};

$(() => {
	oMessagewarningWidget.loadMessage('#message');

	let sPage = oAppMain.getParameterByName('p');

	switch (sPage) {
		case 'delete':
			oDelete.setView();
			break;
		case 'edit':
			oEdit.setView();
			break;
		case 'send':
			oSend.setView();
			break;
		case 'view':
			oView.setView();
			break;
		case 'create':
			oCreate.setView();
			break;
		case 'sendMessage':
			oSendMessage.setView();
			break;
		case 'templates':
			oTemplates.setView();
			break;
		default:
	  		oMenu.setView();
	    	break;
	}
});