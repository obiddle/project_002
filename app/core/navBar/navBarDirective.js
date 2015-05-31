'use strict';

simplySocialApp.directive('navBarTemplate', function () {
	return {
		restrict: 'EA',
		templateUrl: function () {
			return "core/navBar/navBarView.html"; 
		}
	}
})


