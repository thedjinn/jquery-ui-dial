(function($,undefined) {
	$.widget("ui.dial", {
		options: {
			min: -100,
			max: 100,
			unitsPerPixel: 10,
		},

		_create: function() {
			this.value = 10;
			this.origvalue = this.value;
			
			var self = this;

			this.element.addClass("ui-dial");
			this.element.draggable({
				axis:'y',
				helper: 'original',
				scroll: false,
				cursor: 'row-resize',
			}).bind('drag',function(event,ui) {
				self.value = self.origvalue + (ui.position.top - ui.originalPosition.top);
				ui.position=ui.originalPosition;
				console.log(self.value);
			}).bind('dragstart',function(event,ui) {
				self.origvalue = self.value;
			});
		},

		destroy: function() {
			$.Widget.prototype.destroy.apply(this,arguments);
		},

		value: function(newValue) {
		}
	});
})(jQuery);
