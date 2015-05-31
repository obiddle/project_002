'use strict';

simplySocialApp.directive('navBarTemplate', function () {
	return {
		restrict: 'EA',
		templateUrl: function () {
			return "shared/navBar/navBarView.html"; 
		}
	}
})


