"use strict";

var oSend = {};

/*
*/
oSend.goBack = function(){
	oAppMain.goTo('modules/whatsapp', '');
}

/*
*/
oSend.send = function(form){
	if(oSend.validateSend()){
		oAppMain.disableButton("#sendForm #btnsend", true);

        let sNumber = form.number.value;
        let sMessage = form.message.value;

        sMessage = encodeURIComponent(sMessage);
        oAppMain.goTo_w(`https://api.whatsapp.com/send?phone=${sNumber}&text=${sMessage}`);

        $('html, body').animate({scrollTop:0});
        $("#sendForm")[0].reset();
        
        oAppMain.disableButton("#sendForm #btnsend", false);
        oMessagewarningWidget.setMessage(oMessage.MESSAGE_SENT[g_iIdLanguage], 1);
        oMessagewarningWidget.loadMessage('#message');
	}

	return false;
}

/*
*/
oSend.validateSend = function(){
	let sText = '';

    sText = oMessage.YOU_MUST_ADD_A_NUMBER[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #number', '#sendForm #errnumber', sText)){return false;}
    sText = oMessage.YOU_MUST_ADD_A_MESSAGE[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #message', '#sendForm #errmessage', sText)){return false;}

    return true;
}

/*
*/
oSend.setView = function(){
    let oData = {};
    oAppMain.loadTemplate('modules/whatsapp/send', '#moduleBody', oData);
}