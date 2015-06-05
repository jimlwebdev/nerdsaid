nerdsaid.namespace('nerdsaid.controller');
nerdsaid.controller.bodyTag = function($scope,$filter) {
	$scope.value = 'main section nerdsaid.controller.bodyTag';
}
nerdsaid.controller.sectionTag = function($scope) {
	$scope.value = 'main section nerdsaid.controller.sectionTag';
}

nerdsaid.controller.homeTag = function($scope,shareMe) {
//	$scope.value = 'main section nerdsaid.controller.homeTag';
	$scope.value = shareMe.getValue('abc');
}
	
define(['app','providers','custom-filters'], function (app) {
	app.controller('bodyTag',['$scope', '$filter', nerdsaid.controller.bodyTag]);
	app.controller('sectionTag',['$scope', nerdsaid.controller.sectionTag]);
	app.controller('pTag',['$scope', 'shareMe', nerdsaid.controller.homeTag]);
});
