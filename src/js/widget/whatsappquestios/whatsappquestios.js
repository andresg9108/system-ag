"use strict";

var oWhatsappquestiosWidget = {};

/*
*/
oWhatsappquestiosWidget.load = (oQuestios) => {
	let aTickets = oQuestios.tickets;

	aTickets = getFormatTickets(aTickets);

	let oData = {
		tickets: aTickets
	};
    $.when(oAppMain.loadTemplate('widget/whatsappquestios/whatsappquestios', '#whatsappquestios', oData))
    .done(() => {
    });
}

var getFormatTickets = (aTickets) => {
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