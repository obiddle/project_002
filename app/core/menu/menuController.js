

LessonsApp.controller('menuController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope){
    

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



    // function errorhandler(data){
    //     // do something
    // }

}]);




