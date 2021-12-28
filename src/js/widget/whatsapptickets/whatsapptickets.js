"use strict";

var oWhatsappticketsWidget = {};

/*
*/
oWhatsappticketsWidget.load = function(oTickets){
	let oData = {};
    oAppMain.loadTemplate('widget/whatsapptickets/whatsapptickets', '#whatsapptickets', oData);
}

/*
*/
oWhatsappticketsWidget.addTicket = function(oTicket){
	let oData = {};
	let sRoute = g_sRouteTemplate+'widget/whatsapptickets/ticket.hbs';
	let sTemplate = Hbs[sRoute](oData);

	$('#whatsapptickets #tickets').append(sTemplate);
}

/*
*/
oWhatsappticketsWidget.getTickets = function(){
	let aResponse = [];

	let iIndex = 1;
	$('#whatsapptickets #tickets .row-whatsapptickets').each(function(){
		let oTicket = {};
		let sType = $(this).find('.type-whatsapptickets').val();
		let sQuestion = $(this).find('.question-whatsapptickets').val();
		let sValue = $(this).find('.value-whatsapptickets').val();
		
		oTicket.type = sType;
		oTicket.question = sQuestion;
		oTicket.value = sValue;

		aResponse.push(oTicket);
		iIndex++
	});

	return aResponse;
}