
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

	nerdsaid.namespace('nerdsaid.config');
	nerdsaid.config.mynerdsaid = function($routeProvider) {
		$routeProvider
		.when('/',{
			templateUrl: 'home.html'
		})
	}
	
	angular.module('nerdSaid', ['ngRoute'])
	.config(nerdsaid.config.mynerdsaid)
	.controller('bodyTag',['$scope', nerdsaid.controller.bodyTag])
	.controller('sectionTag',['$scope', nerdsaid.controller.sectionTag])
	.controller('pTag',['$scope', nerdsaid.controller.homeTag])
	;
