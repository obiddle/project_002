

LessonsApp.controller('lessonsController', ['$scope', function ($scope){
    

    function init(){

    }
    init()

    $scope.changeView = function (view) {
        //navigationService.setAnimationType("Next", "slideIn");
        $location.path(view);
    };




    // function errorhandler(data){
    //     // do something
    // }

}]);




