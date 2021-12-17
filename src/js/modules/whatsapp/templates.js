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
            test: '¡Hello World!'
        }
    }
    $.ajax(oAjax)
    .then(function(oResponse){
        console.log(oResponse);
    })
    .catch(function(e){
        // console.log(e);
    });

    var oData = {};
    oAppMain.loadTemplate('modules/whatsapp/templates', '#moduleBody', oData);
}