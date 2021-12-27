"use strict";

var oView = {};

/*
*/
oView.goBack = function(){
	oAppMain.goTo('modules/whatsapp', 'p=templates');
}

/*
*/
oView.setView = function(){
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
                template: oTemplate
            };
            oAppMain.loadTemplate('modules/whatsapp/view', '#moduleBody', oData);
        }
    })
    .catch(function(e){
    });
}