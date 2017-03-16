$(document).ready(function(){
	
	// multiplier for zoom up
	var mpx = 1.5;	
	
	$('img.zoom').hover(function(){
		// on mouseover...
		// get orig img width
		var oWidth = $(this).width();
		// get orig img height
		var oHeight = $(this).height();
		$(this)
		// stop the event in case of abrupt mouseout
		.stop()
		// increase the height and width
		.animate({
			width: (oWidth * mpx) + 'px',
			height: (oHeight * mpx) + 'px'
			// length of animation in milliseconds
		},500);
	},
		//on mouseout...
	function(){
		// get new img width
		var newWidth = $(this).width();
		// get new img height
		var newHeight = $(this).height();
		$(this)
		// stop the event in case of abrupt mouseout
		.stop()
		// set height and width back to orig size
		.animate({
			width: (newWidth / mpx) + 'px',
			height: (newHeight / mpx) + 'px'
		},500);
	});
	
});
