


simplySocialApp.factory('postsService', [ function () {
	var factory = {}

    factory.getPostData = function(){
		var data = dataBlobPosts.allPosts;
        return data;
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
        }
       
    }
]}
