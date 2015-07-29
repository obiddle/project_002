LessonsApp.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
        .when('/intro', {
            templateUrl: 'core/intro/introView.html',
            controller: 'introController'
        })
        .when('/lessons', {
            templateUrl: 'core/lessons/lessonsView.html',
            controller: 'lessonsController'
        })
        // .when('/beginner', {
        //     templateUrl: 'core/beginner/beginnerView.html',
        //     controller: 'beginnerController'
        // })
        .otherwise({
            redirectTo: '/intro'
        });
}]);