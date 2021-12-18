var oApp = {};

oApp.getPath = () => {
  let sPath = (typeof process.env.SYSTEM_AG !== 'undefined') ? process.env.SYSTEM_AG : '';

  if(sPath != ''){
    let sLastChar = sPath.charAt(sPath.length-1);
    sPath += (sLastChar != '/') ? '/' : '';
  }

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

exports.getPath = oApp.getPath;
exports.getResponse = oApp.getResponse;