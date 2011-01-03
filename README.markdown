jQuery UI dial control
======================

This is a dial widget for jQuery UI. It is made to imitate the dial controls encountered in various audio processing applications. 

The dial values are represented using an image map. Changing the value of the dial is done by dragging it in a vertical linear motion.

Usage
-----

Turning an existing DOM element into a dial widget is pretty easy:

	$("#something").dial();

You can pass in any additional options and event handlers as arguments to the `dial` function, just like regular jQuery UI widgets. Example:

	$("#something").dial({
		min: 0,
		max: 11,
		value: 5,
		
		change: function(event, ui) {
			$("#somethingelse").html("Current value: "+ui.value);
		}
	});

The dial widget uses CSS background sprites for the rotating animation. Therefore a bit of extra CSS is necessary to ensure the dial will look like it should:

	.ui-dial {
		display: inline-block;
		background: url('dial.png') no-repeat top left;
		width: 32px;
		height: 32px;
	}

See the demo directory in the repository for a complete example.

Options
-------

 * `min` (Number)
   Minimum value.  
   Default: -100

 * `max` (Number)
   Maximum value.  
   Default: 100

 * `value` (Number)
   Initial value.  
   Default: 25

 * `unitsPerPixel` (Number)
   Amount of units to change the value per pixel of mouse movement.  
   Default: 1

 * `numImages` (Number)
   Number of images in the image map.  
   Default: TODO

 * `imageWidth` (Number)
   Width of an individual dial state image.  
   Default: TODO

Events
------

 * `start(event, ui)`
   Triggered when the user started dragging the dial. 
   The current value of the dial is returned as `ui.value`.

 * `change(event, ui)`
   Triggered when the user changes the value of the dial.
   The new value of the dial is returned as `ui.value`.

 * `stop(event, ui)`
   Triggered when the user stopped dragging the dial.
   The current value of the dial is returned as `ui.value`.

Methods
-------

 * `.dial("destroy")`
   Destroys the dial and all data associated with it.

 * `.dial("disable")`
   Disables the dial.

 * `.dial("enable")`
   Enables the dial.

 * `.dial("option", optionName, [value])`
   Get or set any dial option. If no option is specified, it will act as a getter.

 * `.dial("option", options)`
   Set multiple dial options at once by providing an options object.

 * `.dial("widget")`
   Returns the .ui-dial element.

 * `.dial("value, [newValue])`
   Get or set the dial value. If no value is specified, it will act as a getter.

License
-------

The jQuery UI dial project is licensed the same as the jQuery and jQuery UI projects. This means it is available for use in all personal or commercial projects under both the MIT and GPL licenses. Choose the license that best suits your project, and use it accordingly. [More information about licensing](http://jquery.org/license).
