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
        data: {}
    }
    $.ajax(oAjax)
    .then(function(oResponse){
        if(oResponse.status == 1){
            oResponse = oResponse.response;
            
            let oData = {
            };
            oAppMain.loadTemplate('modules/whatsapp/templates', '#moduleBody', oData);
        }else{
        }
    })
    .catch(function(e){
        // console.log(e);
    });
}