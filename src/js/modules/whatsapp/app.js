"use strict";

var oApp = {};

$(function(){
	oMessagewarningWidget.loadMessage('#message');

	let sPage = oAppMain.getParameterByName('p');

	switch (sPage) {
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