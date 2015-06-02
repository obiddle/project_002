

simplySocialApp.controller('homeController', ['$scope', 'postsService', 'helperService', 'messageService', function ($scope, postsService, helperService, messageService){
    

    function init(){
        $scope.messageText = "";
        $scope.displayPostButton = false
    }
    init()

    $scope.createMessage = function(){
        helperService.beginPromiseChain($scope.messageText)
        .then(postsService.buildPostParams)
        .then(postsService.createNewMessage)
        .then(postsService.updatePosts)
        .then(messageService.closeMessage)
        .then(clearParams)
        .catch(errorhandler)
    }

    $scope.activePostButton = function(){
        if($scope.messageText !== ""){
            $scope.displayPostButton = true
        } else {
            $scope.displayPostButton = false   
        }
    }

    function clearParams(){
        $scope.messageText = "";
        $scope.activePostButton();
    }

    function errorhandler(data){
        // mocking data so no erros should happen
    }

}]);




