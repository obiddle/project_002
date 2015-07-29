

LessonsApp.controller('partOneController', ['$scope', '$rootScope', function ($scope, $rootScope){
    

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




