
/*

	domain.com - script.js
	company, year [your initials]
			
*/

(function($) { 

	/* --------------------- your snippet */
	
	var $.fn.yourSnippet = function(options) {
		
		var defaults = {
			option1: 123,
			option2: true,
			option3: 'string'
		};
		
		var options = $.extend(defaults, options);
		
		return this.each(function() {
    		
    		// type your snippet
    		
		});
	};
	
	/* --------------------- init your snippet */
	
	$(function() {
	
		$("#element").yourSnippet();
    
    });

})(jQuery);