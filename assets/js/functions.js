// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		$('#email-button').click(function() {
			$('#email-button').addClass("active");
			$('#mc-embedded-subscribe').addClass("show");
			$(this).attr('placeholder','Email Address...');
		});
	
	});

})(window.jQuery);