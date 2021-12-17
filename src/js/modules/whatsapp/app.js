"use strict";

var oApp = {};

$(function(){
	oMessagewarningWidget.loadMessage('#message');

	var sPage = oAppMain.getParameterByName('p');

	switch (sPage) {
		case 'send':
			oSend.setView();
			break;
		default:
	  		oMenu.setView();
	    	break;
	}
});