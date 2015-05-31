


simplySocialApp.factory('userAccountService', [ function () {
	var factory = {}

    factory.getUserData = function(){
		var data = {}
		data.name = "Owen Biddle";
		data.avatar_image = "assets/images/http/avatar_image.jpg";
		data.description = "Front-end & mobile Engineer Living in San Diego, CA"
		data.website = "https://www.linkedin.com/in/owenbiddle"
		data.email = "obiddle@gmail.com"
		data.password = "mypassword"

        return data;
    }

	return factory;
}])



