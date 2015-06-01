


simplySocialApp.factory('messageService', [ '$rootScope', function ($rootScope) {
	var factory = {}

    factory.openMessage = function() {
         $rootScope.$broadcast('open-message');
    };

    factory.closeMessage = function() {
        $rootScope.$broadcast('close-message');
        //$('.messageField').blur();
    };

	return factory;
}])



