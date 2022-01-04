"use strict";

var oEdit = {};

/*
*/
oEdit.goBack = () => {
	let sId = oAppMain.getParameterByName('id');
    oAppMain.goTo('modules/whatsapp', `p=view&id=${sId}`);
}

/*
*/
oEdit.edit = (form) => {
    if(oEdit.validateEdit()){
        oAppMain.disableButton("#editForm #btnedit", true);

        let iId = parseInt(oAppMain.getParameterByName('id'), 10);
        let sName = form.name.value;
        let sNumber = form.number.value;
        let sMessage = form.message.value;
        let aTickets = oWhatsappticketsWidget.getTickets();

        let oAjax = {
            url: `${g_sBackEnd}whatsapp/edit`,
            type: 'put',
            data: {
                id: iId,
                name: sName,
                number: sNumber,
                message: sMessage,
                tickets: aTickets
            }
        }
        $.ajax(oAjax)
        .then((oResponse) => {
            if(oResponse.status == 1){
                oLoadingWidget.load('#editForm #keypad');
                oAppMain.deactivateSubmitInTheForm("#editForm");

                let oResp = oResponse.response;
                let iId = oResp.id;

                oMessagewarningWidget.setMessage(oResponse.text.client, 1);
                oAppMain.goTo('modules/whatsapp', `p=view&id=${iId}`);
            }else{
                $('html, body').animate({scrollTop:0});
                oAppMain.disableButton("#editForm #btnedit", false);
                oMessagewarningWidget.setMessage(oResponse.text.client, 2);
                oMessagewarningWidget.loadMessage('#message');
            }
        })
        .catch((e) => {
            $('html, body').animate({scrollTop:0});
            oAppMain.disableButton("#editForm #btnedit", false);
            oMessagewarningWidget.setMessage(oMessageMain.UNEXPECTED_ERROR[g_iIdLanguage], 3);
            oMessagewarningWidget.loadMessage('#message');
        });
	}

	return false;
}

/*
*/
oEdit.validateEdit = () => {
	let sText = '';

    sText = oMessage.YOU_MUST_ADD_A_NAME[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#editForm #name', '#editForm #errname', sText)){return false;}
    sText = oMessage.YOU_MUST_ADD_A_NUMBER[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#editForm #number', '#editForm #errnumber', sText)){return false;}
    sText = oMessage.YOU_MUST_ADD_A_MESSAGE[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#editForm #message', '#editForm #errmessage', sText)){return false;}

    return true;
}

/*
*/
oEdit.setView = () => {
    let iId = parseInt(oAppMain.getParameterByName('id'), 10);

    let oAjax = {
        url: `${g_sBackEnd}whatsapp/templates`,
        type: 'get',
        data: {
            id: iId
        }
    }
    $.ajax(oAjax)
    .then((oResponse) => {
        if(oResponse.status == 1){
            let oResp = oResponse.response;
            let oTemplate = oResp.template;
            let sName = oTemplate.name;
            let sNumber = oTemplate.number;
            let sMessage = oTemplate.message;
            let aTickets = (typeof oTemplate.tickets != 'undefined') ? oTemplate.tickets : [];

            let oData = {
                name: sName,
                number: sNumber,
                message: sMessage
            };
            $.when(oAppMain.loadTemplate('modules/whatsapp/edit', '#moduleBody', oData))
            .done(() => {
                let oTickets = {
                    tickets: aTickets
                };
                oWhatsappticketsWidget.load(oTickets);
            });
        }
    })
    .catch((e) => {
    });
}