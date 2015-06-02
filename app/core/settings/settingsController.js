

simplySocialApp.controller('settingsController', [ '$scope', 'userAccountService', function ($scope, userAccountService) {
    
	function init(){
		$scope.userData = userAccountService.getUserData();
	}
    init()

    $scope.setAvatarImage = function(){
        return { 'background-image': 'url(' + $scope.userData.avatar_image + ')' }
    }

    $scope.togglePreference = function(index, status){
    	if(status == 1){
    		$scope.userData.preferences[index] = 0;
    	} else {
    		$scope.userData.preferences[index] = 1;
    	}
    }

}]);


