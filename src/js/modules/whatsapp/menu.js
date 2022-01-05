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
  let oData = {};
  oAppMain.loadTemplate('modules/whatsapp/menu', '#moduleBody', oData);
}