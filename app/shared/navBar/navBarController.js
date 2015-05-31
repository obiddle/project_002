

simplySocialApp.controller('navBarController', ['$scope', 'userAccountService', function ($scope, userAccountService) {
    
	function init(){
		$scope.search = "";
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

}]);


