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
				addClasses: false,

				drag: function(event, ui) {
					var val = (self._origValue + (ui.position.top - ui.originalPosition.top) / -self.options.unitsPerPixel);
					ui.position = ui.originalPosition;
					self.value(val);

					self._trigger("change", event, {foo:"bar"});
				},

				start: function(event, ui) {
					self._origValue = self._value;
					self._trigger("start", event, {foo:"bar"});
				},

				stop: function(event, ui) {
					self._trigger("stop", event, {foo:"bar"});
				}
			});

			this._update();
		},

		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments);
		},

		value: function(newValue) {
			if (newValue === undefined) {
				return this._value;
			}

			if (typeof newValue === "number") {
				this._value = newValue;
				this._value = Math.max(this._value, this.options.min);
				this._value = Math.min(this._value, this.options.max);
				this._update();
			}

			return this;
		},

		_update: function() {
			var pos = Math.round((this._value - this.options.min) / (this.options.max - this.options.min) * (this.options.numImages - 1)) * this.options.imageWidth;

			this.element.css("background-position", "-" + pos + "px 0");
		}
	});
})(jQuery);
