
	var nerdsaid = {};nerdsaid.namespace = function() {var a,o;a=arguments[0].split('.');o=nerdsaid;o[a[1]]=o[a[1]]||{};o=o[a[1]];return o;};

	nerdsaid.namespace('nerdsaid.controller');
	nerdsaid.controller.bodyTag = function($scope) {
		$scope.value = 'main section nerdsaid.controller.bodyTag';
	}
	nerdsaid.controller.sectionTag = function($scope) {
		$scope.value = 'main section nerdsaid.controller.sectionTag';
	}

	nerdsaid.controller.homeTag = function($scope) {
		$scope.value = 'main section nerdsaid.controller.homeTag';
	}
	
define(['app'], function (app) {
	app.controller('bodyTag',['$scope', nerdsaid.controller.bodyTag]);
	app.controller('sectionTag',['$scope', nerdsaid.controller.sectionTag]);
	app.controller('pTag',['$scope', nerdsaid.controller.homeTag]);
});
