

simplySocialApp.directive('postsViewNavigator', [function () {
    return {
        restrict: 'EA',
        controller: function (postsService, $rootScope) {

        	this.chunkPostData = function(){
				data = {};
				data.left = [];
				data.middle = [];
				data.right = [];
				
				for(index = 0; index < this.postData.length; index+= 3) {
				  data.left.push(this.postData[index])
				}	
				for(index = 1; index < this.postData.length; index+= 3) {
				  data.middle.push(this.postData[index])
				}			
				for(index = 2; index < this.postData.length; index+= 3) {
				  data.right.push(this.postData[index])
				}
				return data;
			}

		    this.init = function(){
		    	this.postType = "allListView";
		    	this.postData = postsService.getPostData();	
		    	this.postDataChunks = this.chunkPostData() // for masonry layout
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

			this.openChunckComments = function(index, type){
				if(type === 'left'){
					this.postDataChunks.left[index].toggleComment = true;
				} else if (type === 'middle'){
					this.postDataChunks.middle[index].toggleComment = true;
				} else {
					this.postDataChunks.right[index].toggleComment = true;
				}
			}

			this.closeChunkComments = function(index, type){
				if(type === 'left'){
					this.postDataChunks.left[index].toggleComment = false;
				} else if (type === 'middle'){
					this.postDataChunks.middle[index].toggleComment = false;
				} else {
					this.postDataChunks.right[index].toggleComment = false;
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


