'use strict';

simplySocialApp.directive('sendMessageTemplate', function () {
	return {
		restrict: 'EA',
		templateUrl: function () {
			return "core/message/messageView.html"; 
		}
	}
})

simplySocialApp.directive("sendMessageViewLogic", function() {
    return {
        restrict : "A",
        link : function(scope, element, attrs) {

            var className = attrs.class;

            scope.$on("open-message", function(e) {
                element.addClass(className + 'Active');
            });

            scope.$on("close-message", function(e) {
                element.removeClass(className + 'Active');
            });

        }
    };
});


