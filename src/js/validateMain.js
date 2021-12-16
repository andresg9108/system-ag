"use strict";

var oValidateMain = {};

/*
*/
oValidateMain.validateTextNotEmpty = function(sTag, sTagError, sText){
    $(sTagError).html('');
    var expr = /^.+/i;

    if(!expr.test($(sTag).val())){
        $(sTag).focus();
        $(sTagError).html(sText);
        return false;
    }
    return true;
}

/*
*/
oValidateMain.validateNameOrLastName = function(sTag, sTagError, sText){
	$(sTagError).html('');
    var expr = /^[a-zñáéíóúü\s]*$/i;

    if(!expr.test($(sTag).val())){
        $(sTag).focus();
        $(sTagError).html(sText);
        return false;
    }
    return true;
}

/*
*/
oValidateMain.validateEmail = function(sTag, sTagError, sText){
    $(sTagError).html('');
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!expr.test($(sTag).val())){
        $(sTag).focus();
        $(sTagError).html(sText);
        return false;
    }
    return true;
}

/*
*/
oValidateMain.validateIfPasswordsMatch = function(sTagP1, sTagP2, sTagError, sText){
    $(sTagP1).html('');
    $(sTagP2).html('');

    if($(sTagP1).val() != $(sTagP2).val()){
        $(sTagP2).focus();
        $(sTagError).html(sText);
        return false;
    }

    return true;
}

/*
*/
oValidateMain.validateSelectionMenu = function(sTag, sTagError, sText){
    $(sTagError).html('');
    
    if($(sTag).val() == 0){
        $(sTag).focus();
        $(sTagError).html(sText);
        return false;
    }

    return true;
}