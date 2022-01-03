"use strict";

var oWhatsappquestiosWidget = {};

/*
*/
oWhatsappquestiosWidget.load = (oQuestios) => {
	let aTickets = oQuestios.tickets;

	console.log(aTickets);

	let oData = {};
    $.when(oAppMain.loadTemplate('widget/whatsappquestios/whatsappquestios', '#whatsappquestios', oData))
    .done(() => {
    });
}