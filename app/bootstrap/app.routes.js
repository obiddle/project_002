simplySocialApp.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
        .when('/home', {
            templateUrl: 'core/home/homeView.html',
            controller: 'homeController'
        })
        .when('/settings', {
            templateUrl: 'core/settings/settingsView.html',
            controller: 'settingsController'
        })
        .when('/profile', {
            templateUrl: 'core/profile/profileView.html',
            controller: 'profileController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);