'use strict';


LessonsApp.directive('touchEffect', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            
            var className = attrs.class;
            
            element.bind('touchstart', function(e) {
                element.addClass(className + 'Active');
            });

            element.bind('touchmove', function(e) {
                element.removeClass(className + 'Active');
            });

            element.bind('touchend', function(e) {
                $timeout(function(){
                    element.removeClass(className + 'Active');
                }, 300);
            });

        }
    };
});

