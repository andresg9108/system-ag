"use strict";

var oTemplates = {};

/*
*/
oTemplates.goBack = function(){
	oAppMain.goTo('modules/whatsapp', '');
}

/*
*/
oTemplates.setView = function(){
    let oAjax = {
        url: `${g_sBackEnd}whatsapp/templates`,
        type: 'get',
        data: {
            id: 0
        }
    }
    $.ajax(oAjax)
    .then(function(oResponse){
        if(oResponse.status == 1){
            let oResp = oResponse.response;
            let aTemplates = oResp.templates;

            let oData = {
                templates: aTemplates
            };
            oAppMain.loadTemplate('modules/whatsapp/templates', '#moduleBody', oData);
        }
    })
    .catch(function(e){
    });
}