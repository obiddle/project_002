

simplySocialApp.controller('navBarController', ['$scope', '$location', 'userAccountService', 'messageService', function ($scope, $location, userAccountService, messageService) {
    
	function init(){
		$scope.searchText = "";
		$scope.settingsMenuOpen = false;
		$scope.userData = userAccountService.getUserData();
	}
    init()

    $scope.setAvatarImage = function(){
        return { 'background-image': 'url(' + $scope.userData.avatar_image + ')' }
    }

    $scope.changeView = function(view){
    	$location.path(view); 
    }; 

    $scope.openMessage = function(view){
        messageService.openMessage(); 
    }; 

}]);


