

LessonsApp.controller('beginnerController', ['$scope', '$location', function ($scope, $location){
    

    function init(){
        $scope.showModal = false;
    }
    init()

    $scope.changeView = function (view) {
        //navigationService.setAnimationType("Next", "slideIn");
        $location.path(view);
    };

    $scope.openModal = function (){
        $scope.showModal = true;
    }

    $scope.closeModal = function (){
        $scope.showModal = false;
    }




    // function errorhandler(data){
    //     // do something
    // }

}]);




