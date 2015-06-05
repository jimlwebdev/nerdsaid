nerdsaid.namespace('nerdsaid.module');
nerdsaid.module.start = function(angularAMD) {
  var app = angular.module("webapp", ['ngRoute']);
  
  var routes = {
	'root':  angularAMD.route({templateUrl: 'templates/home.html', controller:'bodyTag'})
	}
  
  app.config(function ($routeProvider) {
    $routeProvider
		.when('/',routes.root)
  });
  
  return angularAMD.bootstrap(app);
}

define(['angularAMD', 'angular-route'], nerdsaid.module.start );
