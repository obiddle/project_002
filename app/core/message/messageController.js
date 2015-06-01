

simplySocialApp.controller('messageController', ['$scope', 'postsService', 'helperService', 'messageService', function ($scope, postsService, helperService, messageService){
    

    function init(){

    }
    init()

    $scope.closeMessage = function(view){
        messageService.closeMessage(); 
    }; 

}]);




