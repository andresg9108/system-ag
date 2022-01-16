var oApp = {};

oApp.settings = {
	language_id: 1 // 0: English; 1: Español
};

oApp.getSettings = () => {
	return oApp.settings;
}

exports.getSettings = oApp.getSettings;