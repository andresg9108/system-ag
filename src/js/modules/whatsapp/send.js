"use strict";

var oSend = {};

/*
*/
oSend.goBack = function(){
    let sId = oAppMain.getParameterByName('id');
	oAppMain.goTo('modules/whatsapp', `p=view&id=${sId}`);
}

/*
*/
oSend.send = function(form){
    console.log('Send...');

	/*if(oSend.validateSend()){
        oAppMain.disableButton("#sendForm #btnsend", true);

        let sNumber = form.number.value;
        let sMessage = form.message.value;

        let oAjax = {
            url: `${g_sBackEnd}whatsapp/sendMessage`,
            type: 'post',
            data: {
                number: sNumber,
                message: sMessage
            }
        }
        $.ajax(oAjax)
        .then(function(oResponse){
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
        .catch(function(e){
            $('html, body').animate({scrollTop:0});
            oAppMain.disableButton("#sendForm #btnsend", false);
            oMessagewarningWidget.setMessage(oMessageMain.UNEXPECTED_ERROR[g_iIdLanguage], 3);
            oMessagewarningWidget.loadMessage('#message');
        });
	}*/

	return false;
}

/*
*/
oSend.validateSend = function(){
	let sText = '';

    /*sText = oMessage.YOU_MUST_ADD_A_NUMBER[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #number', '#sendForm #errnumber', sText)){return false;}
    sText = oMessage.YOU_MUST_ADD_A_MESSAGE[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #message', '#sendForm #errmessage', sText)){return false;}*/

    return true;
}

/*
*/
oSend.setView = function(){
    let iId = parseInt(oAppMain.getParameterByName('id'), 10);

    let oAjax = {
        url: `${g_sBackEnd}whatsapp/templates`,
        type: 'get',
        data: {
            id: iId
        }
    }
    $.ajax(oAjax)
    .then(function(oResponse){
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
            .done(function(){
                let oTickets = {
                    tickets: aTickets
                };
                oWhatsappticketsWidget.load(oTickets);
            });
        }
    })
    .catch(function(e){
    });
}