$(function(){
	$("#dial").dial({
		min: 0,
		max: 100,
		value: 50,
		unitsPerPixel: 0.25,

		imageWidth: 36,
		numImages: 41,

		change: function(event,ui) {
			console.log(event,ui);
		}
	});
});
