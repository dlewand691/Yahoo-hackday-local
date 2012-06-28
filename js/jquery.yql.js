/*
 * jQuery YQL plugin
 *
 * Copyright (c) 2010 Berescu Ionut
 * Dual licensed under GPL/MIT license.
 *
 * http://usingjquery.wordpress.com/
 *
 * Version: 0.2
 */

(function($){
     $.YQL = function(query,callback)
	 {
		 $.ajax(
			 {
				url: "http://query.yahooapis.com/v1/public/yql",
				dataType: "jsonp",
				success: function(content)
				{
					if (callback)
					{
						callback(content);
					}
				},
				data: {
					q: query,
					format: "json",
				 }
			 }
		 );
	 }
 })(jQuery);