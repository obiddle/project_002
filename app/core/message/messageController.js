

simplySocialApp.controller('messageController', ['$scope', 'postsService', 'helperService', 'messageService', function ($scope, postsService, helperService, messageService){
    

    function init(){
    	$scope.messageText = "";
    }
    init()

    $scope.closeMessage = function(view){
        messageService.closeMessage(); 
    }; 

    $scope.createMessage = function(){
    	helperService.beginPromiseChain($scope.messageText)
    	.then(postsService.buildPostParams)
    	.then(postsService.createNewMessage)
    	.then(postsService.updatePosts)
    	.then(messageService.closeMessage)
    	.catch(errorhandler)

    }

    function errorhandler(data){
    	// mocking data so no erros should happen
    }

}]);




