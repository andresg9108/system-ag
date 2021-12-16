"use strict";

var oMessagewarningWidget = {};

/*
*/
oMessagewarningWidget.loadMessage = function(sTag){
    var sMessage = localStorage.getItem(g_sSession+'message');
    var iMessageType = parseInt(localStorage.getItem(g_sSession+'messageType'));
    oMessagewarningWidget.setMessage('', '');

    if(sMessage != '' && sMessage != null){
        var oData = {
            'message': sMessage
        };
        var sTemplate = '';

        if(iMessageType == 1){
            sTemplate = 'widget/messagewarning/messageSuccessful';
        }else if(iMessageType == 2){
            sTemplate = 'widget/messagewarning/messageError';
        }else if(iMessageType == 3){
            sTemplate = 'widget/messagewarning/messageWarning';
        }

        if(g_oTimer != null){
            clearTimeout(g_oTimer);
            g_oTimer = null;
        }

        oAppMain.loadTemplate(sTemplate, sTag, oData);
        g_oTimer = setTimeout("oMessagewarningWidget.cleanMessage('"+sTag+"')", 30000); // 30Sec
    }
}

/*
*/
oMessagewarningWidget.setMessage = function(sMessage, iMessageType){
    if(sMessage == ''){
        localStorage.removeItem(g_sSession+'message');
        localStorage.removeItem(g_sSession+'messageType');
    }else{
        localStorage.setItem(g_sSession+'message', sMessage);
        localStorage.setItem(g_sSession+'messageType', iMessageType);
    }
}

/*
*/
oMessagewarningWidget.cleanMessage = function(sTag){
    if(g_oTimer != null){
        clearTimeout(g_oTimer);
        g_oTimer = null;
    }
    $(sTag).html("");
}