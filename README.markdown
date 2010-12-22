jQuery UI dial control
======================

This is a dial widget for jQuery UI.

Usage
-----

Turning an existing DOM element into a dial widget is pretty easy:

	$("#something").dial();

You can pass in any additional options and event handlers as arguments to the `dial` function, just like regular jQuery UI widgets. Example:

	$("#something").dial({
		min: 0,
		max: 11,
		default: 5,
		
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

 * `min`  
   Minimum value.  
   Default: -100

 * `max`  
   Maximum value.  
   Default: 100

 * `default`
   Initial value.  
   Default: 25

 * `unitsPerPixel`
   Amount of units to change the value per pixel of mouse movement.  
   Default: 1

 * `numImages`  
   Number of images in the image map.  
   Default: TODO

 * `imageWidth`  
   Width of an individual dial state image.  
   Default: TODO

Events
------

 * `start`
 * `change`
 * `stop`

Methods
-------

 * `destroy`
 * `disable`
 * `enable`
 * `option` (individual)
 * `option` (hash)
 * `widget`
 * `value` (get)
 * `value` (set)

License
-------

The jQuery UI dial project is licensed the same as the jQuery and jQuery UI projects. This means it is available for use in all personal or commercial projects under both the MIT and GPL licenses. Choose the license that best suits your project, and use it accordingly. [More information about licensing](http://jquery.org/license).
