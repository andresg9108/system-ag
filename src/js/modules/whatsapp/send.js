"use strict";

var oSend = {};

/*
*/
oSend.goBack = () => {
    let sId = oAppMain.getParameterByName('id');
	oAppMain.goTo('modules/whatsapp', `p=view&id=${sId}`);
}

/*
*/
oSend.send = (form) => {
	if(oSend.validateSend()){
        oAppMain.disableButton("#sendForm #btnsend", true);

        let iId = parseInt(oAppMain.getParameterByName('id'), 10);
        let sNumber = form.number.value;
        let aQuestions = oWhatsappquestiosWidget.getQuestions();

        let oAjax = {
            url: `${g_sBackEnd}whatsapp/send`,
            type: 'post',
            data: {
                id: iId,
                number: sNumber,
                questions: aQuestions
            }
        }
        $.ajax(oAjax)
        .then((oResponse) => {
            if(oResponse.status == 1){
                $("#sendForm")[0].reset();
                $('html, body').animate({scrollTop:0});
                oAppMain.disableButton("#sendForm #btnsend", false);
                oMessagewarningWidget.setMessage(oResponse.text.client, 1);
                oMessagewarningWidget.loadMessage('#message');
            }else{
                $('html, body').animate({scrollTop:0});
                oAppMain.disableButton("#sendForm #btnsend", false);
                oMessagewarningWidget.setMessage(oResponse.text.client, 2);
                oMessagewarningWidget.loadMessage('#message');
            }
        })
        .catch((e) => {
            $('html, body').animate({scrollTop:0});
            oAppMain.disableButton("#sendForm #btnsend", false);
            oMessagewarningWidget.setMessage(oMessageMain.UNEXPECTED_ERROR[g_iIdLanguage], 3);
            oMessagewarningWidget.loadMessage('#message');
        });
	}

	return false;
}

/*
*/
oSend.validateSend = () => {
	let sText = '';

    sText = oMessage.YOU_MUST_ADD_A_NUMBER[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #number', '#sendForm #errnumber', sText)){return false;}

    return true;
}

/*
*/
oSend.setView = () => {
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
            $.when(oAppMain.loadTemplate('modules/whatsapp/send', '#moduleBody', oData))
            .done(() => {
                let oQuestios = {
                    tickets: aTickets
                };
                oWhatsappquestiosWidget.load(oQuestios);
            });
        }
    })
    .catch((e) => {
    });
}