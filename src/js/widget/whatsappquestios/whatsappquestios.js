"use strict";

var oWhatsappquestiosWidget = {};

/*
*/
oWhatsappquestiosWidget.load = (oQuestios) => {
	let aTickets = oQuestios.tickets;

	aTickets = oWhatsappquestiosWidget.getFormatTickets(aTickets);

	let oData = {
		tickets: aTickets
	};
    $.when(oAppMain.loadTemplate('widget/whatsappquestios/whatsappquestios', '#whatsappquestios', oData))
    .done(() => {
    });
}

/*
*/
oWhatsappquestiosWidget.getQuestions = () => {
	let aResponse = [];

	let iIndex = 1;
	$('#whatsappquestios #questios .row-whatsappquestios').each(function(){
		let oQuestion = {};
		let sName = $(this).find('.name-whatsappquestios').val();
		let sValue = $(this).find('.value-whatsappquestios').val();
		
		oQuestion.name = sName;
		oQuestion.value = sValue;

		aResponse.push(oQuestion);
		iIndex++
	});

	return aResponse;
}

/*
*/
oWhatsappquestiosWidget.getFormatTickets = (aTickets) => {
	$.each(aTickets, (i, v) => {

		// Type selection
		aTickets[i].type_selection = (v.type == 'selection');
		let aTypeSelectionValue = [];
		$.each(v.value.split(';'), (i2, v2) => {
			aTypeSelectionValue.push({
				value: v2
			});
		});
		aTickets[i].type_selection_value = aTypeSelectionValue;
	});

	return aTickets;
}