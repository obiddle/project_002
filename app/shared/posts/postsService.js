


simplySocialApp.factory('postsService', [ 'userAccountService', '$rootScope', function (userAccountService, $rootScope) {
	var factory = {}

    factory.getPostData = function(){
		var data = dataBlobPosts.allPosts;
		var postData = factory.chunkPostData(data)
        return postData;
    }

    factory.getPhotoData = function(){
		var data = dataBlobPhotos.allPhotos;
		var postData = factory.chunkPostData(data)
        return postData;
    }

    factory.getVideoData = function(){
		var data = dataBlobVideos.allVideos;
		var postData = factory.chunkPostData(data)
        return postData;
    }

    factory.chunkPostData = function(postData){
		postData.left = [];
		postData.middle = [];
		postData.right = [];
		
		for(index = 0; index < postData.length; index+= 3) {
			postData[index].column = 'left';
			postData.left.push(postData[index])
		}	
		for(index = 1; index < postData.length; index+= 3) {
			postData[index].column = 'middle';
			postData.middle.push(postData[index])
		}			
		for(index = 2; index < postData.length; index+= 3) {
			postData[index].column = 'right';
			postData.right.push(postData[index])
		}
		return postData;
	}

	factory.buildPostParams = function(messageText){
		var userData = userAccountService.getUserData();

		var data = {}

		data.id = 1;
		data.time = '1m';
		data.text = messageText;
		data.photo = 0;
		data.video = 0;
		data.comments = 0;

		data.user = {}
		data.user.user_name = userData.name;
		data.user.avatar_image = userData.avatar_image 
		data.user.id = userData.id

		return data;

	}

	factory.createNewMessage = function(data){
		dataBlobPosts.allPosts.unshift(data)
		return
	}

	factory.updatePosts = function(){
		$rootScope.$broadcast('update-post-data');
	}

	return factory;
}])




var dataBlobPosts = {"allPosts": [
    {
        "id": 01,
        "time" : "3m",      
        "text" : "How to Get Inspired: the Right Way - Designmodo bit.ly/1hqgbQA Good stuff from @designmodo!",
        "photo" : 0,
        "video" : 0,
        "comments" : [
            {
                "time" : "1h",
                "user_name": "Kerem Suer",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_03.jpg", 
                "text": "Great way to start the week. Thanks for sharing!"
            },
            {
                "time" : "2h",
                "user_name": "Ren Walker",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_04.jpg",  
                "text": "Reeling inspired now... thanks for the great article"
            }
        ],
        "user" : {
	        "user_name": "Sam Soffes",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_01.jpg",
	        "id" : 1

        }
        
 
    },
    {
        "id": 02,
        "time" : "25m",      
        "text" : "My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/",
        "photo" : "assets/images/post/dataBlobImages/post_image_02.png",
        "video" : 0,
        "comments" : 0,
        "user" : {
	        "user_name": "Meg Robichaud",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_02.jpg", 
	        "id" : 2
        }
       
    },
    {
        "id": 03,
        "time" : "50m",      
        "text" : "8 Apps to Turn Your Pipe Dreams into Prototypes on.mash.to/1oubyu8",
        "photo" : 0,
        "video" : 0,
        "comments" : [
            {
                "time" : "1h",
                "user_name": "Meg Robichaud",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_02.jpg", 
                "text": "Nice one!"
            },
            {
                "time" : "2h",
                "user_name": "Ren Walker",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_04.jpg",  
                "text": "Reeling inspired now... thanks for the great article"
            }
        ],
        "user" : {
	        "user_name": "Kerem Suer",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_03.jpg", 
	        "id" : 3
        }
       
    },
    {
        "id": 04,
        "time" : "1h",      
        "text" : "How to get animations out of your head on.mash.to/1oubyu8 Funny and useful.",
        "photo" : 0,
        "video" : 0,
        "comments" : [
            {
                "time" : "1h",
                "user_name": "Meg Robichaud",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_02.jpg", 
                "text": "Nice one!"
            },
            {
                "time" : "2h",
                "user_name": "Ren Walker",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_04.jpg",  
                "text": "Reeling inspired now... thanks for the great article"
            }
        ],
        "user" : {
	        "user_name": "Ren Walker",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_04.jpg", 
	        "id" : 4
        }
       
    },
    {
        "id": 05,
        "time" : "1h",      
        "text" : "Looking for something to read? Check this out on.mash.to/1oubyu8. If you don't like it then sue me. ",
        "photo" : 0,
        "video" : 0,
        "comments" : 0,
        "user" : {
	        "user_name": "Liang Shi",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_05.jpg", 
	        "id" : 5
        }
       
    },
    {
        "id": 06,
        "time" : "1h",      
        "text" : "You have to see this bike. It will make your daily commute an absolute joy ride! on.mash.to/1oubyu8",
        "photo" : 0,
        "video" : "assets/images/post/dataBlobImages/post_video_06.png",
        "comments" : 0,
        "user" : {
	        "user_name": "Vitor Leal",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_06.jpg", 
	        "id" : 6
        }
       
    },
    {
        "id": 07,
        "time" : "50m",      
        "text" : "Need some reading?? 11 free ebooks for designers | creative Bloq on.mash.to/1oubyu8 via @netmag",
        "photo" : 0,
        "video" : 0,
        "comments" : [
            {
                "time" : "1h",
                "user_name": "Kerem Suer",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_03.jpg", 
                "text": "Great way to start the week. Thanks for sharing!"
            },
            {
                "time" : "2h",
                "user_name": "Vitor Leal",
                "avatar_image": "assets/images/post/dataBlobImages/avatar_image_06.jpg",  
                "text": "Reeling inspired now... thanks for the great article"
            }
        ],
        "user" : {
	        "user_name": "Pallavi Gupta",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_07.jpg", 
	        "id" : 7
        }
       
    },
    {
        "id": 08,
        "time" : "25m",      
        "text" : "Solid Sunset here in San diego... instagram.com/p/mV0PUrHRwQ/",
        "photo" : "assets/images/post/dataBlobImages/post_image_08.png",
        "video" : 0,
        "comments" : 0,
        "user" : {
	        "user_name": "Sam Soffes",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_01.jpg", 
	        "id" : 8
        }
       
    }
]}

var dataBlobPhotos = {"allPhotos": [
    {
        "id": 02,
        "time" : "25m",      
        "text" : "My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/",
        "photo" : "assets/images/post/dataBlobImages/post_image_02.png",
        "video" : 0,
        "comments" : 0,
        "user" : {
	        "user_name": "Meg Robichaud",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_02.jpg", 
	        "id" : 9
        }
       
    },
    {
        "id": 08,
        "time" : "25m",      
        "text" : "Solid Sunset here in San diego... instagram.com/p/mV0PUrHRwQ/",
        "photo" : "assets/images/post/dataBlobImages/post_image_08.png",
        "video" : 0,
        "comments" : 0,
        "user" : {
	        "user_name": "Sam Soffes",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_01.jpg", 
	        "id" : 10
        }
       
    },
    {
        "id": 08,
        "time" : "25m",      
        "text" : "My beach cruiser. I take it serving daily, check it... instagram.com/p/mV0PUrHRwQ/",
        "photo" : "assets/images/post/dataBlobImages/post_image_01.png",
        "video" : 0,
        "comments" : 0,
        "user" : {
	        "user_name": "Pallavi Gupta",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_07.jpg", 
	        "id" : 11
        }
       
    }
]}


var dataBlobVideos = {"allVideos": [
    {
        "id": 02,
        "time" : "25m",      
        "text" : "My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/",
        "photo" : 0,
        "video" : "assets/images/post/dataBlobImages/post_video_07.png",
        "comments" : 0,
        "user" : {
	        "user_name": "Pallavi Gupta",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_07.jpg", 
	        "id" : 9
        }
       
    },
    {
        "id": 06,
        "time" : "1h",      
        "text" : "You have to see this bike. It will make your daily commute an absolute joy ride! on.mash.to/1oubyu8",
        "photo" : 0,
        "video" : "assets/images/post/dataBlobImages/post_video_06.png",
        "comments" : 0,
        "user" : {
	        "user_name": "Vitor Leal",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_01.jpg", 
	        "id" : 6
        }
       
    },
    {
        "id": 08,
        "time" : "25m",      
        "text" : "My beach cruiser. I take it serving daily, check it... instagram.com/p/mV0PUrHRwQ/",
        "photo" : 0,
        "video" : "assets/images/post/dataBlobImages/post_video_08.png",
        "comments" : 0,
        "user" : {
	        "user_name": "Meg Robichaud",
	        "avatar_image": "assets/images/post/dataBlobImages/avatar_image_02.jpg", 
	        "id" : 11
        }
       
    }
]}



