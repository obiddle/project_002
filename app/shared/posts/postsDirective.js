

simplySocialApp.directive('postsViewNavigator', [function () {
    return {
        restrict: 'EA',
        controller: function (postsService, $rootScope) {

		    this.init = function(){
		    	this.postType = "allListView";
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

		    this.setBackgroundImage = function(image){
		        return { 'background-image': 'url(' + image + ')' }
		    }

			this.openComments = function($index){
			    this.postData[$index].toggleComment = true;
			}

			this.closeComments = function($index){
			    this.postData[$index].toggleComment = false;
			}

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

simplySocialApp.directive("postsAllListTemplate", function() {
    return {
        restrict: "AE",
        require: '^postsViewNavigator',
        templateUrl: function(){
            return "shared/posts/views/allListView.html";  
        },
        link: function (scope, element, attrs, postsViewNavigatorCtrl) {
            scope.postsViewNavigator = postsViewNavigatorCtrl;
        }
    };
});