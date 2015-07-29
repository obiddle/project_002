LessonsApp.run(function ($document) {

	// turn off scroll bounce on iOS
	$document.on('touchmove', function (event) {
		event.preventDefault()
	})
	
});