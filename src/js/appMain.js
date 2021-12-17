"use strict";

var g_iIdLanguage = 1; // English = 0, Spanish = 1
var g_sRouteTemplate = 'src/template/';
var g_iApp = 2; // 0: Web; 1: Android; 2: Electron;
var g_sSession = 'sfavevf5fA';
var g_oTimer = null;
var g_sDirsrc;
var g_sDirmain;

var oAppMain = {};

$(function(){
  g_sDirsrc = $("#dirsrc").val();
  g_sDirmain = $("#dirmain").val();
});

/*
*/
oAppMain.disableButton = function(sTag, bDisabled){
    if(bDisabled){
        $(sTag).attr('disabled', 'true');
    }else{
        $(sTag).removeAttr('disabled');
    }
}

/*
*/
oAppMain.goTo = function(sUrl, sParametersGet){
    sUrl = g_sDirmain+sUrl;
    var sLast = sUrl[sUrl.length -1];
    if(sLast != '/'){ sUrl += '/'; }
    if(g_iApp > 0){ sUrl += 'index.html'; }

    location.href = sUrl+'?'+sParametersGet;
}

/*
*/
oAppMain.goTo_w = function(sUrl){
    window.open(sUrl);
}

/*
*/
oAppMain.goTo_w_app = function(sUrl){
  try{
    if(g_iApp == 0){
      oAppMain.goTo_w(sUrl);
    }else if(g_iApp == 1){
      var sTarget = '_blank';
      var sOptions = 'location=yes,hideurlbar=yes,lefttoright=yes,zoom=no,closebuttoncaption=<AtrÃ¡s,toolbarcolor=#000000,navigationbuttoncolor=#ffffff,closebuttoncolor=#ffffff';
      cordova.InAppBrowser.open(sUrl, sTarget, sOptions);
    }else{
      oAppMain.goTo_w(sUrl);
    }
  }catch(e){
    // alert(e);
    console.error(e);
  }
}

/*
*/
oAppMain.getParameterByName = function(sName){
    sName = sName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + sName + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*
*/
oAppMain.loadTemplate = function(sRouteTemplate, sTag, oData){
  var sRoute = g_sRouteTemplate+sRouteTemplate+'.hbs';
  var sTemplate = Hbs[sRoute](oData);
  var isTemplate = $(sTag).attr('data-template');
  isTemplate = (isTemplate == 'true');
  var sClassCss = $(sTag).attr('data-styles');
  if(isTemplate){
    $(sTag).removeClass();
    $(sTag).addClass(sClassCss);
    $(sTag).html(sTemplate);
  }
}