simplySocialApp.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
        .when('/home', {
            templateUrl: 'core/home/view.html',
            controller: 'homeController'
        })
        .when('/settings', {
            templateUrl: 'core/settings/view.html',
            controller: 'settingsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);