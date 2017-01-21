/*
MT&L Holiday Card 2010
Author: MT&L Public Relations, Gavin Anderegg
*/

var rooms = {
	'bedroom': {
		'toString': function() { return ["You're back in the bedroom."]; },
		'enter': function() {
			updateLog(["You wake up. The last thing you remember, you were drinking rum and eggnog at the office holiday party - now you're lying in a strange room, in a four-poster bed. The room is decorated in Victorian style. You seem to be wearing a top hat.",
			"What are you doing here, and how do you get back to your normal life?",
			"Suddenly, a glow fills the room. The Spirit of Holiday Present appears, and ponderously intones:",
			"\"O, Wandering Shade! I have summoned you BACK TO THE PAST in order to teach you the TRUE MEANING OF THE SEASON!\""]);
			
			delete rooms.bedroom.enter;
		},
		'background': '/static/img/bedroom.jpg',
		'objects': {
			candles: {
				'name': 'candles',
				'x': 64,
				'y': 108,
				'width': 37,
				'height': 45,
				'fade': 300,
				'src': 'url(/static/img/bedroom-candles.png)',
				'action': function() {
					updateLog(["Excellent! Now you have the candles."]);
					var invCandles = $('<div id="invCandles"></div>');
					
					$("#bottomBottom").jPlayer("setFile", '/static/jingle.mp3').jPlayer("play");
					
					invCandles.appendTo('#inv');
					
					invCandles.fadeIn();
					
					$('#display #candles').fadeOut();
					$('#display #candles').unbind('click');
					
					player.inv.push('candles');
					
					delete rooms.bedroom.objects.candles;
				}
			},
			spirit: {
				'name': 'spirit',
				'x': 122,
				'y': 0,
				'width': 156,
				'height': 244,
				'fade': 2000,
				'onload': function() {
					setTimeout(function() {
						$('div#spirit').fadeIn(4000);
						delete rooms.bedroom.objects.spirit['onload'];
					}, 8000);
				},
				'src': 'url(/static/img/bedroom-spirit.png)',
				'action': function() {
					$('div#spirit').unbind('click');
					delete rooms.bedroom.objects.spirit;
					
					updateLog([
						"The Spirit looks dejected. \"You're not buying it, are you? Rats. Look; the truth is, I really need your help. I'm having a party here at 6:00 and I haven't got a thing done.\"",
						"\"Everything you need is in the house - talk to the servants, they'll help you. You just need to set up the decorations, food, and candles and stuff in the front parlour. I REALLY appreciate this; you get serious holiday points for helping me out. No coal for you! Like, EVER! Thanks!\"",
						"The Spirit is gone. You look around the room. There's a clock on the wall that says 4:45. Yikes!"
					]);
					
					setTimeout(function() {
						$('div#spirit').fadeOut(4000);
					}, 6500);
				}
			},
			doorknob: {
				'name': 'doorknob',
				'x': 276,
				'y': 106,
				'width': 41,
				'height': 41,
				'fade': 300,
				'src': 'url(/static/img/bedroom-doorknob.png)',
				'action': function() {
					enterRoom(rooms.upHall);
				}
			}
		}
	},
	'upHall': {
		toString: function() { return ["The door opens on a hallway landing. There are stairs that go up from here, maybe to the attic. There are also stairs that go down."]; },
		'background': '/static/img/upHall.jpg',
		'objects': {
			downBanister: {
				'name': 'downBanister',
				'x': 128,
				'y': 112,
				'width': 65,
				'height': 58,
				'fade': 300,
				'src': 'url(/static/img/upHall-down.png)',
				'action': function() {
					enterRoom(rooms.downHall);
				}
			},
			upBanister: {
				'name': 'upBanister',
				'x': 288,
				'y': 70,
				'width': 64,
				'height': 70,
				'fade': 300,
				'src': 'url(/static/img/upHall-up.png)',
				'action': function() {
					enterRoom(rooms.attic);
				}
			},
			backArrow: {
				'name': 'backArrow',
				'x': 212,
				'y': 202,
				'width': 37,
				'height': 32,
				'fade': 300,
				'src': 'url(/static/img/upHall-back.png)',
				'action': function() {
					enterRoom(rooms.bedroom);
				}
			}
		}
	},
	'attic': {
		toString: function() { return ["You go up to the attic. It's dusty, and full of furniture and boxes. One box has tinsel drooling out the top."]; },
		'background': '/static/img/attic.jpg',
		'objects': {
			backArrow: {
				'name': 'backArrow',
				'x': 105,
				'y': 232,
				'width': 37,
				'height': 32,
				'fade': 300,
				'src': 'url(/static/img/upHall-back.png)',
				'action': function() {
					enterRoom(rooms.upHall);
				}
			},
			tinsel: {
				'name': 'tinsel',
				'x': 242,
				'y': 168,
				'width': 93,
				'height': 94,
				'fade': 300,
				'src': 'url(/static/img/attic-box.png)',
				'action': function() {
					updateLog(["Great! Now you have the decorations."]);
					
					$("#bottomBottom").jPlayer("setFile", '/static/jingle.mp3').jPlayer("play");
					
					var invTinsel = $('<div id="invTinsel"></div>');
					
					invTinsel.appendTo('#inv');
					
					invTinsel.fadeIn();
					
					$('#display #tinsel').fadeOut();
					$('#display #tinsel').unbind('click');
					
					player.inv.push('tinsel');
					
					rooms.attic.toString = function() {
						return ["You go up to the attic. It's dusty, and full of furniture and boxes."];
					};
					
					delete rooms.attic.objects.tinsel;
				}
			}
		}
	},
	'downHall': {
		toString: function() { return ["You're in the main hall of the house. There are three doors here: one is obviously the front door to the house. There is another door on your left, and a door on your right. A footman is standing here."]; },
		'background': '/static/img/downHall.jpg',
		'objects': {
			backArrow: {
				'name': 'backArrow',
				'x': 235,
				'y': 232,
				'width': 37,
				'height': 32,
				'fade': 300,
				'src': 'url(/static/img/upHall-back.png)',
				'action': function() {
					enterRoom(rooms.upHall);
				}
			},
			leftDoor: {
				'name': 'leftDoor',
				'x': 50,
				'y': 176,
				'width': 53,
				'height': 51,
				'fade': 300,
				'src': 'url(/static/img/downHall-left.png)',
				'action': function() {
					enterRoom(rooms.kitchen);
				}
			},
			rightDoor: {
				'name': 'rightDoor',
				'x': 335,
				'y': 175,
				'width': 47,
				'height': 44,
				'fade': 300,
				'src': 'url(/static/img/downHall-right.png)',
				'action': function() {
					enterRoom(rooms.parlour);
				}
			},
			footman: {
				'name': 'footman',
				'x': 140,
				'y': 132,
				'width': 60,
				'height': 118,
				'fade': 2000,
				'src': 'url(/static/img/downHall-footman.png)',
				'action': function() {
					if (this.talked == true || ($.inArray('bird', player.inv) >= 0)) {
						updateLog(["\"Nice hat, by the way.\""]);
					}
					else {
						updateLog(["\"Yes sir or madam, the whole bleeding town is coming to this party. Did the Spirit nab you from the future to help him set up? Lucky you. Well then, you'll need to take the door on the left to the kitchen and get the food.\""]);
					}
					
					this.talked = true;
				}
			}
		}
	},
	'kitchen': {
		toString: function() { return ['The kitchen is noisy, steamy and hot. There are mountains of food here: a beautiful cooked goose lies on a platter, surrounded by trimmings. There is a cook putting the last minute touches to a pudding.']; },
		'background': '/static/img/kitchen.jpg',
		'objects': {
			backArrow: {
				'name': 'backArrow',
				'x': 12,
				'y': 232,
				'width': 37,
				'height': 32,
				'fade': 300,
				'src': 'url(/static/img/kitchen-back.png)',
				'action': function() {
					enterRoom(rooms.downHall);
				}
			},
			bird: {
				'name': 'bird',
				'x': 284,
				'y': 181,
				'width': 143,
				'height': 82,
				'fade': 300,
				'src': 'url(/static/img/kitchen-bird.png)',
				'action': function() {
					updateLog(["You take the goose."]);
					var invBird = $('<div id="invBird"></div>');
					
					$("#bottomBottom").jPlayer("setFile", '/static/jingle.mp3').jPlayer("play");
					
					invBird.appendTo('#inv');
					
					invBird.fadeIn();
					
					$('#display #bird').fadeOut();
					$('#display #bird').unbind('click');
					
					player.inv.push('bird');
					
					rooms.kitchen.toString = function() {
						return ["The kitchen is noisy, steamy and hot. There are mountains of food here, and a cook is putting the last minute touches to a pudding."];
					};
					
					delete rooms.kitchen.objects.bird;
				}
			},
			chef: {
				'name': 'spirit',
				'x': 98,
				'y': 5,
				'width': 194,
				'height': 218,
				'fade': 2000,
				'src': 'url(/static/img/kitchen-chef.png)',
				'action': function() {
					if (this.talked == true) {
						updateLog(["\"What are you waiting for? Get to the parlour, I'm almost done here.\""]);
					}
					else {
						updateLog(["\"Is it time for the party, then? Right: you take the goose to the parlour and I'll get the servants to bring in the rest. Hurry up now; back out to the main hall with you.\""]);
					}
					
					this.talked = true;
				}
			}
		}
	},
	'parlour': {
		toString: function() { return ["You're in the parlour."]; },
		'enter': function() {
			var logText = ['This must be the parlour!'];
			
			var actions = [];
			
			if ($('#inv:has(#invBird)').length == 1) {
				$('#invBird').fadeOut(300);
				$('#endFood').fadeIn(2000);
				logText.push('You set the goose down on the centre of the table. Quickly the cooking staff brings in the rest of food.');
				$('#invBird').remove();
				
				delete rooms.parlour.objects.endFood['onload'];
			}
			
			if ($('#inv:has(#invTinsel)').length == 1) {
				$('#invTinsel').fadeOut(300);
				$('#invTinsel').remove();
				$('#endTinsel').fadeIn(2000);
				logText.push('You open up the box and string paper chains, and hang mistletoe, and arrange decorations all over the room. Instant Holiday cheer!');
				
				delete rooms.parlour.objects.endTinsel['onload'];
			}
			
			if ($('#inv:has(#invCandles)').length == 1) {
				$('#invCandles').fadeOut(300);
				$('#invCandles').remove();
				$('#endCandles').fadeIn(2000);
				logText.push('You set up the candles. The room is now bright and cheerful.');
				
				delete rooms.parlour.objects.endCandles['onload'];
			}
			
			if (player.inv.length >= 3) {
				$('body').snowfall({flakeCount : 100, maxSpeed : 10, maxSize : 3});
				
				$("#bottomBottom").jPlayer("setFile", '/static/tree.mp3').jPlayer("play");
				
				setTimeout(function() {
					$('#endFire').fadeIn(2000);
					$('#backArrow').fadeOut(300);
					$('#endSpirit').css('z-index', '400');
					
					setTimeout(function() {
						$('#endSpirit').fadeIn(4000);
					}, 8000);
					
				}, 2000);
				
				logText.push("With the room set for the party, the fire is lit. The room is piled high with great-smelling food, the decorations look awesome, the candles are sparkling and you're done: it's 5:59. The Spirit returns.");
				logText.push('"Wow, you did great! Thanks a heap, I was just run off my feet. Now if you don\'t mind, I\'m going to pop you home before my guests see you. Good luck with that whole global warming thing in the future, by the way. Happy Holidays!"');
				logText.push("<div id=\"gameDone\">Congratuations &mdash; you've won!<br>Click here to help us donate.</a>");
			}
			
			updateLog(logText);
			
			// delete rooms.parlour.enter;
		},
		'background': '/static/img/parlour.jpg',
		'objects': {
			backArrow: {
				'name': 'backArrow',
				'x': 105,
				'y': 232,
				'width': 37,
				'height': 32,
				'fade': 300,
				'src': 'url(/static/img/upHall-back.png)',
				'action': function() {
					enterRoom(rooms.downHall);
				}
			},
			endFood: {
				'name': 'endFood',
				'x': 114,
				'y': 112,
				'width': 220,
				'height': 68,
				'fade': 2000,
				'src': 'url(/static/img/parlour-food.png)',
				'onload': function() {
					
				},
				
				'action': function() { }
			},
			endTinsel: {
				'name': 'endTinsel',
				'x': 86,
				'y': 48,
				'width': 260,
				'height': 66,
				'fade': 2000,
				'src': 'url(/static/img/parlour-tinsel.png)',
				'onload': function() {
					
				},
				
				'action': function() { }
			},
			endCandles: {
				'name': 'endCandles',
				'x': 191,
				'y': 93,
				'width': 55,
				'height': 43,
				'fade': 2000,
				'src': 'url(/static/img/parlour-candles.png)',
				'onload': function() {
					
				},
				
				'action': function() { }
			},
			endFire: {
				'name': 'endFire',
				'x': 377,
				'y': 110,
				'width': 44,
				'height': 65,
				'fade': 2000,
				'src': 'url(/static/img/parlour-fire.png)',
				'onload': function() {
					
				},
				
				'action': function() { }
			},
			endSpirit: {
				'name': 'spirit',
				'x': 0,
				'y': 0,
				'width': 156,
				'height': 244,
				'fade': 2000,
				'onload': function() {
					
				},
				'src': 'url(/static/img/bedroom-spirit.png)',
				'action': function() {
					
				}
			}
		}
	}
};


var player = {
	'action': 'go',
	'room': rooms.bedroom,
	'inv': []
};


var objects = [];


$(document).ready(function() {
	setAction($('#buttons #go'));
	
	$("#bottomBottom").jPlayer({
		swfPath: "/static/"
	});
	
	$("#bottomBottom").jPlayer("setFile", "/static/jingle.mp3").jPlayer("load");
	
	$('#display').click(function(e) {
		var clickX = (e.pageX - $(this).offset().left);
		var clickY = (e.pageY - $(this).offset().top);
	});
	
	$('#buttons div').click(function() {
		setAction(this);
	});
	
	$(['/static/img/bedroom.jpg','/static/img/upHall.jpg','/static/img/attic.jpg','/static/img/downHall.jpg','/static/img/kitchen.jpg','/static/img/parlour.jpg']).preload();
	
	enterRoom(player.room);
	
	$('#quitButton').hover(function() {
		$(this).css('backgroundImage', 'url(/static/img/quit-over.png)');
	}, function() {
		$(this).css('backgroundImage', 'url(/static/img/quit.png)');
	});
	
	$('#quitButton').click(function() {
		$.colorbox({
			href: '/popup',
			innerHeight: 480,
			innerWidth: 480,
			initialWidth: 0,
			initialHeight: 0,
			iframe: true,
			transition: 'fade'
		});
		
		$('body').snowfall({flakeCount : 100, maxSpeed : 10, maxSize : 3});
	});
	
	
	$('#gameDone').live('click', function() {
		$.colorbox({
			href: '/popup',
			innerHeight: 480,
			innerWidth: 480,
			initialWidth: 0,
			initialHeight: 0,
			iframe: true,
			transition: 'fade'
		});
	});
});


function setAction(button) {
	$(button).parent().children('div').removeClass('current');
	$(button).addClass('current');
	
	player.action = $(button).attr('id');
}


function updateLog(list) {
	stopper();

	var log = $('#log');

	log.children('div').removeClass('newText');

	var newDiv = $('<div class="newText"></div>');

	$.each(list, function(key) {
		setTimeout(function() {
			var newP = $('<p style="display: none"></p>');
			newP.html(list[key]);
			newDiv.append(newP);
			log.append(newDiv);
			
			newP.fadeIn(2000);
			
			$("#log").scrollTo('100%', 2000);
			
			if (key == (list.length -1)) {
				unStopper();
			}
			
		}, 1000 * 5 * key);
	});
	
	return true;
}







function take(object) {
	object.animate({
		opacity: 0,
		top: '+=40'
	});
	
	
}


function enterRoom(room) {
	for (var obj in objects) {
		$(obj).fadeOut(300, function() {
			$(obj).remove();
		});
	}
	
	
	
	$('#display div.old').fadeOut(1000);
	
	var newDiv = $('<div class="new" style="display: none; position: absolute; top: 0; left: 0; width: 442px; height: 265px;"></div>');
	
	newDiv.css('backgroundImage', 'url(' + room.background + ')');
	
	newDiv.appendTo('#display');
	
	newDiv.fadeIn(1000, function() {
		$.each(room.objects, function(key) {
			var img = null;
			var item = null;
			
			item = room.objects[key];
			
			img = $('<div></div>');
			
			img.attr('id', key);
			
			img.css('position', 'absolute');
			img.css('top', item.y);
			img.css('left', item.x);
			img.css('display', 'none');
			img.css('width', item.width);
			img.css('height', item.height);
			img.css('backgroundImage', item.src);
			img.css('backgroundRepeat', 'no-repeat');
			img.css('z-index', '10');
			img.css('cursor', 'pointer');
			
			if (typeof(item.onload) != 'undefined') {
				item.onload();
			}
			else {
				img.fadeIn(item.fade);
			}
			
			objects.push(img);
			
			img.appendTo(newDiv);
			
			img.bind('mouseup', function() {
				item.action();
			});
			
			var wiggle = null;
			
			img.hover(function() {
				if (wiggle == null) {
					img.wiggle();
				}
				wiggle = true;
			}, function() {
				wiggle = null;
			});
		});
	});
	
	if (typeof(room.enter) != 'undefined') {
		room.enter();
	}
	else {
		updateLog(room.toString());
	}
	
	$('#display div.old').remove();
	newDiv.removeClass('new');
	newDiv.addClass('old');
	
	return true;
}


function stopper() {
	var stopper = $('<div id="stopper"></div>');
	
	stopper.click(function() { return false; });
	
	stopper.appendTo($('#display'));
}


function unStopper() {
	$('#stopper').remove();
}


$.fn.preload = function() {
    this.each(function(){
        $('<img>')[0].src = this;
    });
};


/*
jQuery Wiggle
Author: WonderGroup, Jordan Thomas
URL: http://labs.wondergroup.com/demos/mini-ui/index.html
License: MIT (http://en.wikipedia.org/wiki/MIT_License)
Modified for use in the MT&L 2010 Holiday Card by Gavin Anderegg:
	- I fixed the redefining of target object "o"
	- I changed the wrapper element's position to absolute, so it would stop breaking randomly in this use
*/
jQuery.fn.wiggle = function(o) {
	var d = { speed: 50, wiggles: 1, travel: 3, callback: null };
	
	var q = jQuery.extend(d, o);
	
	return this.each( function() {
		var cache = this;
		
		var wrap = jQuery(this).wrap('<div class="wiggle-wrap"></div>').css("position","absolute");
		
		var calls = 0;
		
		for (var i = 1; i <= q.wiggles; i++) {
			jQuery(this).animate({
				left: "-=" + q.travel
			}, q.speed).animate({
				left: "+=" + q.travel * 2
			}, q.speed * 2).animate({
				left: "-=" + q.travel
			}, q.speed, function() {
				calls++;
				
				if (jQuery(cache).parent().hasClass('wiggle-wrap')) {
					jQuery(cache).parent().replaceWith(cache);
				}
				
				if (calls == q.wiggles && jQuery.isFunction(q.callback)) {
					q.callback();
				}
			});
		}
	});
};


(function($) {
	$.fn.customFadeIn = function(speed, callback) {
		$(this).fadeIn(speed, function() {
			if(jQuery.browser.msie)
				$(this).get(0).style.removeAttribute('filter');
			if(callback != undefined)
				callback();
		});
	};
	$.fn.customFadeOut = function(speed, callback) {
		$(this).fadeOut(speed, function() {
			if(jQuery.browser.msie)
				$(this).get(0).style.removeAttribute('filter');
			if(callback != undefined)
				callback();
		});
	};
})(jQuery);