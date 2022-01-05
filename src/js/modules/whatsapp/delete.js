"use strict";

var oDelete = {};

/*
*/
oDelete.goBack = function(){
    let sId = oAppMain.getParameterByName('id');
    oAppMain.goTo('modules/whatsapp', `p=view&id=${sId}`);
}

/*
*/
oDelete.delete = () => {
    oAppMain.disableButton("#keypad #btndelete", true);

    let iId = parseInt(oAppMain.getParameterByName('id'), 10);

    let oAjax = {
        url: `${g_sBackEnd}whatsapp/delete`,
        type: 'delete',
        data: {
            id: iId
        }
    }
    $.ajax(oAjax)
    .then((oResponse) => {
        if(oResponse.status == 1){
            oLoadingWidget.load('#keypad');

            oMessagewarningWidget.setMessage(oResponse.text.client, 1);
            oAppMain.goTo('modules/whatsapp', 'p=templates');
        }else{
            $('html, body').animate({scrollTop:0});
            oAppMain.disableButton("#keypad #btndelete", false);
            oMessagewarningWidget.setMessage(oResponse.text.client, 2);
            oMessagewarningWidget.loadMessage('#message');
        }
    })
    .catch((e) => {
        $('html, body').animate({scrollTop:0});
        oAppMain.disableButton("#keypad #btndelete", false);
        oMessagewarningWidget.setMessage(oMessageMain.UNEXPECTED_ERROR[g_iIdLanguage], 3);
        oMessagewarningWidget.loadMessage('#message');
    });
}

/*
*/
oDelete.setView = function(){
    let iId = oAppMain.getParameterByName('id');

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
            
            let oData = {
                id: iId,
                template: oTemplate
            };
            oAppMain.loadTemplate('modules/whatsapp/delete', '#moduleBody', oData);
        }
    })
    .catch(function(e){
    });
}