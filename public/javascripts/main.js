require.config({
    baseUrl: "javascripts",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min',
        'angular-route': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },
    
    // kick start application
    deps: ['app']
});
