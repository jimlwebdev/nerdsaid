nerdsaid.namespace('nerdsaid.provider');
nerdsaid.provider.shared = function() {
	this.values = {'abc':'123'};
	this.setValues = function(newValues){
		angular.extend(this.values,newValues);
	}
	this.$get = function(){
		var self = this;
		return {
			getValue:function(property){
				var rtnval = '';
				if(self.values){
					rtnval = self.values[property];
				}
				return rtnval;
			}
		}
	}
}
	
define(['app'], function (app) {
	app.provider('shareMe',[nerdsaid.provider.shared]);

	app.config(function(shareMeProvider){
		shareMeProvider.setValues({'abc':'321'});
	});
});
