

simplySocialApp.directive('postsViewNavigator', [function () {
    return {
        restrict: 'EA',
        controller: function (postsService, $rootScope) {


		    this.init = function(){
		    	this.postType = "allListView";
		    	this.postData = postsService.getPostData();	
		    	this.photoData = postsService.getPhotoData();	
		    }
		    this.init()

		    this.updatePostData = function(){
				this.postData = postsService.updatePostData();
		    }

		    this.changePostsView = function(type){
				this.postType = type;
		    }

		    this.setBackgroundImage = function(image){
		        return { 'background-image': 'url(' + image + ')' }
		    }

			this.openComments = function(index){
			    this.postData[index].toggleComment = true;
			}

			this.closeComments = function(index){
			    this.postData[index].toggleComment = false;
			}

			this.openChunkComments = function(index, type){
				if(type === 'left'){
					this.postData.left[index].toggleComment = true;
				} else if (type === 'middle'){
					this.postData.middle[index].toggleComment = true;
				} else {
					this.postData.right[index].toggleComment = true;
				}
			}

			this.closeChunkComments = function(index, type){
				if(type === 'left'){
					this.postData.left[index].toggleComment = false;
				} else if (type === 'middle'){
					this.postData.middle[index].toggleComment = false;
				} else {
					this.postData.right[index].toggleComment = false;
				}
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

simplySocialApp.directive("postsAllGridTemplate", function() {
    return {
        restrict: "AE",
        require: '^postsViewNavigator',
        templateUrl: function(){
            return "shared/posts/views/allGridView.html";  
        },
        link: function (scope, element, attrs, postsViewNavigatorCtrl) {
            scope.postsViewNavigator = postsViewNavigatorCtrl;
        }
    };
});

simplySocialApp.directive("postsPhotosTemplate", function() {
    return {
        restrict: "AE",
        require: '^postsViewNavigator',
        templateUrl: function(){
            return "shared/posts/views/photosGridView.html";  
        },
        link: function (scope, element, attrs, postsViewNavigatorCtrl) {
            scope.postsViewNavigator = postsViewNavigatorCtrl;
        }
    };
});

simplySocialApp.directive("singlePostGridTemplate", function() {
    return {
        restrict: "AE",
        templateUrl: function(){
            return "shared/posts/views/postGrid.html";  
        }
    };
});




