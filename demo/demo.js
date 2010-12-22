$(function(){
	$("#dial").dial({
		change: function(event,ui) {
			console.log(event,ui);
		}
	});
});
