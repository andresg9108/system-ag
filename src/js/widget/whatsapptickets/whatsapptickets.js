"use strict";

var oWhatsappticketsWidget = {};

/*
*/
oWhatsappticketsWidget.load = (oTickets) => {
	let iTicketsid = oTickets.ticketsid;
	let aTickets = oTickets.tickets;



	let oData = {
	};
    $.when(oAppMain.loadTemplate('widget/whatsapptickets/whatsapptickets', '#whatsapptickets', oData))
    .done(() => {
    	$('#whatsapptickets #tickets').attr('data-tickets-id', iTicketsid);
    	$.each(aTickets, (i, v) => {
			oWhatsappticketsWidget.addTicket(v);
		});
    });
}

/*
*/
oWhatsappticketsWidget.addTicket = (oTicket) => {
	let iTicketsId = parseInt($('#whatsapptickets #tickets').attr('data-tickets-id'));
	let sType = (typeof oTicket.type != 'undefined') ? oTicket.type : '';
	let sQuestion = (typeof oTicket.question != 'undefined') ? oTicket.question : '';
	let sValue = (typeof oTicket.value != 'undefined') ? oTicket.value : '';
	let sName = (typeof oTicket.name != 'undefined') ? oTicket.name : '';

	let aType = oWhatsappticketsWidget.getTypeArray(sType);

	if(sName == ''){
		iTicketsId++;
		$('#whatsapptickets #tickets').attr('data-tickets-id', iTicketsId);
		sName = `v${iTicketsId}`;
	}

	let oData = {
		type: aType,
		question: sQuestion,
		value: sValue,
		name: sName
	};
	let sRoute = g_sRouteTemplate+'widget/whatsapptickets/ticket.hbs';
	let sTemplate = Hbs[sRoute](oData);

	$.when($('#whatsapptickets #tickets').append(sTemplate))
	.done(() => {
		oWhatsappticketsWidget.loadEvents();
	});
}

/*
*/
oWhatsappticketsWidget.loadEvents = () => {
	$('#whatsapptickets #tickets .row-whatsapptickets')
	.children('.value-column-whatsapptickets')
	.children('div')
	.children('div')
	.children('.delete-whatsapptickets')
	.on('click', function(){
		$(this).parents('.row-whatsapptickets').remove();
	});
}

/*
*/
oWhatsappticketsWidget.getTickets = () => {
	let oResponse = {};

	let iTicketsId = parseInt($('#whatsapptickets #tickets').attr('data-tickets-id'));
	let aTickets = [];

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

		aTickets.push(oTicket);
		iIndex++
	});

	oResponse.ticketsid = iTicketsId;
	oResponse.tickets = aTickets;

	return oResponse;
}

/*
*/
oWhatsappticketsWidget.getTypeArray = (sType) => {
	let oMessageTypes = {
		"text": ["Text","Texto"],
		"selection": ["Selection","Selección"]
	};

	let aType = [
		{
			value: 'text',
			name: oMessageTypes.text[g_iIdLanguage],
			selected: (sType == 'text')
		},
		{
			value: 'selection',
			name: oMessageTypes.selection[g_iIdLanguage],
			selected: (sType == 'selection')
		}
	];

	return aType;
}