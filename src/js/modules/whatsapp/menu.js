"use strict";

var oMenu = {};

/*
*/
oMenu.goBack = function(){
  oAppMain.goTo('', '');
}

/*
*/
oMenu.setView = function(){
  var oData = {};
  oAppMain.loadTemplate('modules/whatsapp/menu', '#moduleBody', oData);
}