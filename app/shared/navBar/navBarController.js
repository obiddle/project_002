

simplySocialApp.controller('navBarController', ['$scope', '$location', 'userAccountService', function ($scope, $location, userAccountService) {
    
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

}]);


