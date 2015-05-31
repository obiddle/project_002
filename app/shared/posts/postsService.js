


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
                "userName": "Jed Bridges",
                "avatarImage": "assets/images/post/dataBlobImages/avatar_image_01.jpg", 
                "comment": "Great way to start the week. Thanks for sharing!",
            },
            {
                "time" : "2h",
                "userName": "Ren Walker",
                "avatarImage": "assets/images/post/dataBlobImages/avatar_image_01.jpg", 
                "comment": "Reeling inspired now... thanks for the great article",
            }
        ],
        "user" : [
        	{
		        "userName": "Sam Soffes",
		        "avatarImage": "assets/images/post/dataBlobImages/avatar_image_01.jpg",	
        	}
        ]
 
    },
    {
        "id": 02,
        "time" : "3m",      
        "text" : "My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/",
        "photo" : "assets/images/post/dataBlobImages/post_image_02.jpg",
        "video" : 0,
        "comments" : 0,
        "user" : [
        	{
		        "userName": "Meg Robichaud",
		        "avatarImage": "assets/images/post/dataBlobImages/avatar_image_02.jpg", 
        	}
        ]
    }
    // {
    // "id": 2,
    // "time" : "1m":
    // },
    // {
    // "id": 3,
    // "time" : "1m":
    // },
    // {
    // "id": 4,
    // "time" : "1m":
    // },
    // {
    // "id": 5,
    // "time" : "1m":
    // },
    // {
    // "id": 6,
    // "time" : "1m":
    // },
    // {
    // "id": 7,
    // "time" : "1m":
    // },
    // {
    // "id": 8,
    // "time" : "1m":
    // },
    // {
    // "id": 9,
    // "time" : "1m":
    // },
    // {
    // "id": 10,
    // "time" : "1m":
    // },
    // {
    // "id": 11,
    // "time" : "1m":
    // {
    // "id": 12,
    // "time" : "1m":
    // },
    // {
    // "id": 13,
    // "time" : "1m":
    // },
    // {
    // "id": 14,
    // "time" : "1m":
    // },
    // {
    // "id": 15,
    // "time" : "1m":
    // },
    // "id": 16,
    // "time" : "1m":
]}
