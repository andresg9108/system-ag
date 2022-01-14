"use strict";

var oCreate = {};

/*
*/
oCreate.goBack = function(){
	oAppMain.goTo('modules/whatsapp', '');
}

/*
*/
oCreate.create = function(form){
    if(oCreate.validateCreate()){
        oAppMain.disableButton("#createForm #btncreate", true);

        let sName = form.name.value;
        let sNumber = form.number.value;
        let sMessage = form.message.value;
        let oTickets = oWhatsappticketsWidget.getTickets();
        let iTicketsid = oTickets.ticketsid;
        let aTickets = oTickets.tickets;
        
        let oAjax = {
            url: `${g_sBackEnd}whatsapp/create`,
            type: 'post',
            data: {
                name: sName,
                number: sNumber,
                message: sMessage,
                ticketsid: iTicketsid,
                tickets: aTickets
            }
        }
        $.ajax(oAjax)
        .then(function(oResponse){
            if(oResponse.status == 1){
                oLoadingWidget.load('#createForm #keypad');
                oAppMain.deactivateSubmitInTheForm("#createForm");

                let oResp = oResponse.response;
                let iId = oResp.id;

                oMessagewarningWidget.setMessage(oResponse.text.client, 1);
                oAppMain.goTo('modules/whatsapp', `p=view&id=${iId}`);
            }else{
                $('html, body').animate({scrollTop:0});
                oAppMain.disableButton("#createForm #btncreate", false);
                oMessagewarningWidget.setMessage(oResponse.text.client, 2);
                oMessagewarningWidget.loadMessage('#message');
            }
        })
        .catch(function(e){
            $('html, body').animate({scrollTop:0});
            oAppMain.disableButton("#createForm #btncreate", false);
            oMessagewarningWidget.setMessage(oMessageMain.UNEXPECTED_ERROR[g_iIdLanguage], 3);
            oMessagewarningWidget.loadMessage('#message');
        });
	}

	return false;
}

/*
*/
oCreate.validateCreate = function(){
	let sText = '';

    sText = oMessage.YOU_MUST_ADD_A_NAME[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#createForm #name', '#createForm #errname', sText)){return false;}
    sText = oMessage.YOU_MUST_ADD_A_MESSAGE[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#createForm #message', '#createForm #errmessage', sText)){return false;}

    return true;
}

/*
*/
oCreate.setView = function(){
    let oData = {};
    $.when(oAppMain.loadTemplate('modules/whatsapp/create', '#moduleBody', oData))
    .done(function(){
        oWhatsappticketsWidget.load({});
    });
}