$('#buttons #talk').click(function() {
	$.colorbox({href: '/popup', innerHeight: 300, innerWidth: 300, initialWidth: 300, initialHeight: 300, transition: 'none'});
});


function bedroom() {
	var box = $('<div class="box"></div>');
	
	box.css('position', 'relative');
	box.css('top', '0');
	box.css('width', '100px');
	box.css('height', '100px');
	box.css('border', '1px solid #333');
	
	box.appendTo('#display');
	
	box.click(function() {
		if (player.action == 'take') {
			box.unbind('click');
			
			updateLog('You took the box!');
			
			player.inv.push('box');
			
			showTake(box);
		}
		else {
			updateLog('You clicked the box!');
		}
	});
}


# remove objects
thisID = '#' + key;

setTimeout(function() { $(thisID).remove(); }, 1000);


/*

Ok, what needs to happen here?

I need to have the following features:
	* State for room navigation and item storage
	* Item drawing and removing
	* Room image switching
	* Snow?
	* Win conditions?
	* End of game voting?
*/

