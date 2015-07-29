'use strict';

LessonsApp.factory('navBarService', function ($rootScope, $location, localStorageService, crossPlatform, $timeout){

	var factory = {}

	// SET TO FALSE IN MAIN CONTROLLER AFTER INITIAL LOAD
	factory.initialLoad = true;

	factory.resetBrowseHistory = function(){
		localStorageService.set('browseHistory', []);
	};

	factory.saveBrowseHistory = function(history){
		localStorageService.set('browseHistory', history);
	};

	factory.getBrowseHistory = function(){
		return localStorageService.get('browseHistory');
	};

	factory.setAnimationType = function(direction, type){
		if(crossPlatform.appleDevice){
	        //$rootScope.pageAnimation = type + direction;
	        $rootScope.pageAnimation = "noAnimation"
		} else {
			$rootScope.pageAnimation = "noAnimation"
		}

	};

	factory.goBack = function () {
        $rootScope.backButtonClicked = true;

        var browseHistory = factory.getBrowseHistory();
        factory.setAnimationType("Back", "slideIn");
        var prevUrl = browseHistory.length > 1 ? browseHistory.splice(-2)[0] : "/";

        if (prevUrl.indexOf('map') !== -1) {
            factory.setAnimationType("noAnimation", "")
        }
        
        $location.path(prevUrl);
	}

	factory.showListingsInArea = function () {
		$timeout(function () {
			$rootScope.$broadcast('show-listing-in-area')
		}, 200)
	}
	factory.hideListingsInArea = function () {
		$rootScope.$broadcast('hide-listing-in-area')
	}

	return factory
});



	

