LessonsApp.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
        .when('/intro', {
            templateUrl: 'core/intro/introView.html',
            controller: 'introController'
        })
        .otherwise({
            redirectTo: '/intro'
        });
}]);