"use strict";

var oWhatsappticketsWidget = {};

/*
*/
oWhatsappticketsWidget.load = function(oTickets){
	let aTickets = oTickets.tickets;

	let oData = {
	};
    $.when(oAppMain.loadTemplate('widget/whatsapptickets/whatsapptickets', '#whatsapptickets', oData))
    .done(function(){
    	$.each(aTickets, function(i, v){
			oWhatsappticketsWidget.addTicket(v);
		});
    });
}

/*
*/
oWhatsappticketsWidget.addTicket = function(oTicket){
	let iTicketsId = parseInt($('#whatsapptickets #tickets').attr('data-tickets-id'));
	iTicketsId++;
	$('#whatsapptickets #tickets').attr('data-tickets-id', iTicketsId);

	let sType = (typeof oTicket.type != 'undefined') ? oTicket.type : '';
	let sQuestion = (typeof oTicket.question != 'undefined') ? oTicket.question : '';
	let sValue = (typeof oTicket.value != 'undefined') ? oTicket.value : '';
	let sName = `v${iTicketsId}`;

	let oData = {
		question: sQuestion,
		value: sValue,
		name: sName
	};
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
		let sName = $(this).find('.name-whatsapptickets').val();
		
		oTicket.type = sType;
		oTicket.question = sQuestion;
		oTicket.value = sValue;
		oTicket.name = sName;

		aResponse.push(oTicket);
		iIndex++
	});

	return aResponse;
}