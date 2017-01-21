$(document).ready(function() {
	$('input').click(function() {
		var vote = $(this).attr('id');
		
		$.ajax({
			url: '/vote/',
			type: 'POST',
			data: {
				'vote': vote
			},
			success: function(data) { }
		});
		
		$('#content').fadeOut(1000, function() {
			$('#done').fadeIn(1000);
		});
		
		return false;
	});
	
	$('#replay').click(function() {
		window.parent.location.href = "/";
	});
});