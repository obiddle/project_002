

LessonsApp.controller('partOneController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location){
    

    function init(){

    }
    init()

    $scope.changeView = function (view) {
        //navigationService.setAnimationType("Next", "slideIn");
        $location.path(view);
    };


    $scope.back = function () {
        $rootScope.back()
    }

}]);




