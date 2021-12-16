"use strict";

var oApp = {};

$(function(){
    let oAjax = {
        url: 'http://localhost:65000/whatsapp/test',
        type: 'get',
        data: {}
    }
    $.ajax(oAjax)
    .then(function(oResponse){
        console.log(oResponse.test);
    })
    .catch(function(e){
        console.log('Error.');
        console.log(e);
    });
});

/*
*/
oApp.send = function(form){
    if(oApp.validateSend()){
		oAppMain.disableButton("#sendForm #btnsend", true);

        var sNumber = form.number.value;
        var sMessage = form.message.value;

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
oApp.validateSend = function(){
    var sText = '';

    sText = oMessageMain.YOU_MUST_ADD_A_NUMBER[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #number', '#sendForm #errnumber', sText)){return false;}
    sText = oMessageMain.YOU_MUST_ADD_A_MESSAGE[g_iIdLanguage];
    if(!oValidateMain.validateTextNotEmpty('#sendForm #message', '#sendForm #errmessage', sText)){return false;}

    return true;
}