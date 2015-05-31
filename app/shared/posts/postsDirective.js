

simplySocialApp.directive('postsViewNavigator', [function () {
    return {
        restrict: 'EA',
        controller: function (postsService, $rootScope) {

		    this.init = function(){
		    	this.postType = "all";
		    	this.postData = postsService.getPostData();
		    }
		    this.init()

		    this.updatePostData = function(){
				this.postData = postsService.updatePostData();
		    }

		    this.changePostsView = function(type){
				this.postType = type;
		    }

            $rootScope.$on("update-post-data", function(e) {
            	this.updatePostData();
            });

        }
    }

}])

simplySocialApp.directive("postsTabsScope", function() {

    return {
        restrict : "EA",
        require: '^postsViewNavigator',
        link: function (scope, element, attrs, postsViewNavigatorCtrl) {
            scope.postsViewNavigator = postsViewNavigatorCtrl;
        }
    };
});
