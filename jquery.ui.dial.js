(function($, undefined) {
	$.widget("ui.dial", {
		options: {
			min: -100,
			max: 100,
			default: 25,
			unitsPerPixel: 1,

			numImages: 41,
			imageWidth: 36
		},

		_create: function() {
			this._value = this.options.default;
			this._origValue = this._value;

			var self = this;

			this.element.addClass("ui-dial");
			this.element.draggable({
				axis:'y',
				helper: 'original',
				scroll: false,
				cursor: 'row-resize',
			}).bind('drag', function(event, ui) {
				self._value = (self._origValue + (ui.position.top - ui.originalPosition.top) / -self.options.unitsPerPixel);
				self._value = Math.max(self._value, self.options.min);
				self._value = Math.min(self._value, self.options.max);
				ui.position = ui.originalPosition;
				self._update();
			}).bind('dragstart', function(event, ui) {
				self._origValue = self._value;
			});

			this._update();
		},

		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments);
		},

		value: function(newValue) {
			this._value = this._origValue = 10;
		},

		_update: function() {
			var pos = Math.round((this._value - this.options.min) / (this.options.max - this.options.min) * (this.options.numImages - 1)) * this.options.imageWidth;

			this.element.css("background-position-x", "-" + pos + "px");
		}
	});
})(jQuery);
