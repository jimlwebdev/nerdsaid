nerdsaid.namespace('nerdsaid.service');
nerdsaid.service.shared = function() {
	this.values = {};
	this.setValues = function(newValues){
		angular.extend(this.values,newValues);
	}
	this.getValue = function(property){
		var rtnval = '';
		if(self.values){
			rtnval = self.values[property];
		}
		return rtnval;
	}
}
	
define(['app'], function (app) {
	app.service('sharedService',[nerdsaid.service.shared]);
});
