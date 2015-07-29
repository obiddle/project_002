LessonsApp.run(function ($document, $rootScope, $location) {

	// turn off scroll bounce on iOS
	$document.on('touchmove', function (event) {
		event.preventDefault()
	})

    var routehistory = [];

    $rootScope.$on('$routeChangeSuccess', function() {
        routehistory.push($location.$$path);
    });

    $rootScope.back = function () {
        var prevUrl = routehistory.length > 1 ? routehistory.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

});