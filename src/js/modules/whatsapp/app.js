"use strict";

var oApp = {};

$(function(){
	oMessagewarningWidget.loadMessage('#message');

	let sPage = oAppMain.getParameterByName('p');

	switch (sPage) {
		case 'create':
			oCreate.setView();
			break;
		case 'send':
			oSend.setView();
			break;
		case 'templates':
			oTemplates.setView();
			break;
		default:
	  		oMenu.setView();
	    	break;
	}
});