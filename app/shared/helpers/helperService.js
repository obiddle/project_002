
simplySocialApp.factory('helperService', function ($q, $timeout) {

    var factory = {}

    factory.beginPromiseChain = function (data, time) {
        time = (time)?time:0;
        var defer = $q.defer();
        $timeout(function () {
            if (data || data == false) {
                defer.resolve(data);
            } else {
                defer.resolve(true);
            }
        }, time)
        return defer.promise;
    }

    return factory;
});
