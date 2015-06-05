nerdsaid.namespace('nerdsaid.filter');
nerdsaid.filter.shared = function() {
	return function(value){
		return value;
	}
}
	
define(['app'], function (app) {
	app.filter('sharedFilter',[nerdsaid.filter.shared]);
});
