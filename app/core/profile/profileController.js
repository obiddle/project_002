

simplySocialApp.controller('profileController', ['$scope', 'userAccountService', 'messageService', function ($scope, userAccountService, messageService){
    

    function init(){
        $scope.userData = userAccountService.getUserData();
    }
    init()

    $scope.setAvatarImage = function(){
        return { 'background-image': 'url(' + $scope.userData.avatar_image + ')' }
    }

    $scope.openMessage = function(view){
        messageService.openMessage(); 
    }; 

}]);



