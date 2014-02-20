$(document).ready(function(){

var easter_egg = new Konami();
easter_egg.code = function() { 
	// alert('Konami code!'); 
	// Watch your nuts, the squirrel is coming.
	// Build the squirrel to save bandwidth...
$('body').append("<div id=\"lilSq\"><img src=\"http://www.keele.ac.uk/jq/keith/img/lilSq.png\"></div>");
//need to fix reloading



//Keele Squirrel go!
$('#lilSq').delay(400).slideDown('slow').delay(1000);

	$('#lilSq').animate({left: '+=800', opacity: '1'}, 'slow', function(){
		$(this).fadeTo('800', 1, function(){
				$(this).slideUp('slow');

$('#lilSq').addClass('animated swing');
setTimeout(function () {
    $('#lilSq').removeClass('animated swing');
}, 800);

			$('#lilSq').animate({left: '-=800'}, 'fast', function(){
			
$(this).css({
	bottom: '0px',
	left: '0px',
	right: '0px'
});

$(this).remove();
			});
		});
	});
				// $('#lilSq').removeClass('flip');
				// 
				
};
easter_egg.load();
});