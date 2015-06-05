nerdsaid.namespace('nerdsaid.factory');
nerdsaid.factory.shared = function() {
	var rtnval = {timestamp:new Date()}
	return rtnval;
}
	
define(['app'], function (app) {
	app.factory('sharedFactory',[nerdsaid.factory.shared]);
});
