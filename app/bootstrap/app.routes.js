LessonsApp.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
        .when('/intro', {
            templateUrl: 'core/intro/introView.html',
            controller: 'introController'
        })
        .when('/menu', {
            templateUrl: 'core/menu/menuView.html',
            controller: 'menuController'
        })
        .when('/lessons', {
            templateUrl: 'core/lessons/lessonsView.html',
            controller: 'lessonsController'
        })
        .when('/beginner', {
            templateUrl: 'core/beginner/beginnerView.html',
            controller: 'beginnerController'
        })
        .otherwise({
            redirectTo: '/intro'
        });
}]);