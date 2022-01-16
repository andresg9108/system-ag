var oApp = {};

oApp.fs = require('fs');
oApp.globalConstants = require('./globalConstants.js');

/*
*/
oApp.createRoute = (sRoute) => {
  if(!oApp.fs.existsSync(sRoute)){
    oApp.fs.mkdirSync(sRoute, {recursive:true});
  }
}

/*
*/
oApp.getConstant = (sConstant, aParameters = []) => {
  for (let i=0; i < aParameters.length; i++){
    sConstant = sConstant.replace(`<${i+1}?>`, aParameters[i]);
  }

  return sConstant;
}

/*
*/
oApp.getPath = () => {
  if(typeof process.env.SYSTEM_AG === 'undefined' || process.env.SYSTEM_AG === ''){
    throw oApp.globalConstants.getConstant('YOU_MUST_ADD_SYSTEM_AG');
  }

  let sPath = process.env.SYSTEM_AG;
  let sLastChar = sPath.charAt(sPath.length-1);
  sPath += (sLastChar != '/') ? '/' : '';

  return sPath;
}

/*
*/
oApp.getResponse = (iStatus = 1, oResponse = [], sClient = '', sDeveloper = '') => {
  return {
    status: iStatus,
    response: oResponse,
    text: {
      client: sClient,
      developer: sDeveloper
    }
  }
}

exports.createRoute = oApp.createRoute;
exports.getConstant = oApp.getConstant;
exports.getPath = oApp.getPath;
exports.getResponse = oApp.getResponse;