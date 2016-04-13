
/* Customize Scroll Nav function for use in example */

$(function(){

$('.btn-smartnav').click(function(e){
		e.preventDefault();

		if($('#t-scrollnav-holder.unlock').length){
			$('.main-nav').removeClass('unlock');
			$(this).html('Unlock Static "Smart" Nav');
			$('.top-element').css('margin-top', $('#t-scrollnav-holder').height());
		}
		else{
			$('.main-nav').addClass('unlock');
			$('.main-nav').css('height','auto');
			$(this).html('View as Static "Smart" Nav');
			$('.top-element').css('margin-top','');
		}
});

});
