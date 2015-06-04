define(['angularAMD', 'angular-route'], module);

function module(angularAMD) {
  var app = angular.module("webapp", ['ngRoute']);
  
  app.config(function ($routeProvider) {
    $routeProvider
		.when('/',angularAMD.route({
			templateUrl: 'templates/home.html', controller:'bodyTag', controllerUrl:'nerdsaid'
		}))
  });
  return angularAMD.bootstrap(app);
}
