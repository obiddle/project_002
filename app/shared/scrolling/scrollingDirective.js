
LessonsApp.directive('scroller', function($timeout) {
    return {
        restrict: 'A', 
        link: function(scope, element, attributes) {

            
            var scrollElement = element[0];
        
            // allow scrollable elements to scroll
            scrollElement.addEventListener('touchstart', function (event) {
                this.allowUp = (this.scrollTop > 0);
                this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
                this.prevTop = null; this.prevBot = null;
                this.lastY = event.pageY;
            });

            scrollElement.addEventListener('touchmove', function(event){
                var up = (event.pageY > this.lastY), down = !up;
                this.lastY = event.pageY;

                if ((up && this.allowUp) || (down && this.allowDown)) event.stopPropagation();
                else event.preventDefault();
            });
           

        }
    };
});
