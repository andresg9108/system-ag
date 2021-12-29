"use strict";

var sendMessage = {};

/*
*/
sendMessage.goBack = function(){
	oAppMain.goTo('modules/whatsapp', '');
}

/*
*/
sendMessage.send = function(form){
	if(sendMessage.validateSend()){
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
	}

	return false;
}

/*
*/
sendMessage.validateSend = function(){
	let sText = '';

    sText = oMessage.YOU_MUST_ADD_A_NUMBER[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #number', '#sendForm #errnumber', sText)){return false;}
    sText = oMessage.YOU_MUST_ADD_A_MESSAGE[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #message', '#sendForm #errmessage', sText)){return false;}

    return true;
}

/*
*/
sendMessage.setView = function(){
    let oData = {};
    oAppMain.loadTemplate('modules/whatsapp/sendMessage', '#moduleBody', oData);
}