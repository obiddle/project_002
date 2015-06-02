

simplySocialApp.controller('messageController', ['$scope', 'postsService', 'helperService', 'messageService', function ($scope, postsService, helperService, messageService){
    

    function init(){
    	$scope.messageText = "";
    }
    init()

    $scope.closeMessage = function(view){
        messageService.closeMessage(); 
    }; 

    $scope.createMessage = function(){
    	if($scope.messageText !== ""){
	    	helperService.beginPromiseChain($scope.messageText)
	    	.then(postsService.buildPostParams)
	    	.then(postsService.createNewMessage)
	    	.then(postsService.updatePosts)
	    	.then(messageService.closeMessage)
	    	.then(clearParams)
	    	.catch(errorhandler)	
    	}

    }

    function clearParams(){
    	$scope.messageText = "";
    }

    function errorhandler(data){
    	// mocking data so no erros should happen
    }

}]);




