

LessonsApp.controller('beginnerController', ['$scope', '$location', function ($scope, $location){
    

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




