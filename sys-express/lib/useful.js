var oApp = {};

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

exports.getResponse = oApp.getResponse;