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
        if(oResponse.status){
            oResponse = oResponse.response;
            let aDirs = oResponse.dirs;
            
            var oData = {
                dirs: aDirs
            };
            oAppMain.loadTemplate('modules/whatsapp/templates', '#moduleBody', oData);
        }else{
        }
    })
    .catch(function(e){
        // console.log(e);
    });
}