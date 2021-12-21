var oApp = {};

oApp.globalConstants = require('./globalConstants.js');

oApp.getConstant = (sConstant, aParameters = []) => {
  for (let i=0; i < aParameters.length; i++){
    sConstant.replace(`<${i+1}?>`, aParameters[i]);
  }

  return sConstant;
}

oApp.getPath = () => {
  if(typeof process.env.SYSTEM_AG === 'undefined' || process.env.SYSTEM_AG === ''){
    throw oApp.globalConstants.getConstant('YOU_MUST_ADD_SYSTEM_AG');
  }

  let sPath = process.env.SYSTEM_AG;
  let sLastChar = sPath.charAt(sPath.length-1);
  sPath += (sLastChar != '/') ? '/' : '';

  return sPath;
}

oApp.getResponse = (bStatus = false, oResponse = [], sClient = '', sDeveloper = '') => {
  return {
    status: bStatus,
    response: oResponse,
    text: {
      client: sClient,
      developer: sDeveloper
    }
  }
}

exports.getConstant = oApp.getConstant;
exports.getPath = oApp.getPath;
exports.getResponse = oApp.getResponse;